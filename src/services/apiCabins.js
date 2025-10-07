import supabase, { supabaseUrl } from "./supabase";

// Fetch all cabins
export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  } 

  return data;
}

// Create or Edit a cabin
export async function createEditCabin(newCabin, id) {
  // 🧩 Normalize the ID (prevents [object Object] errors)
  const normalizedId = typeof id === "object" ? id.id : id;

  // 🖼️ Check if image already has a full Supabase URL
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  // 🏷️ Generate a new image name and path
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 🧱 Build query
  let query = supabase.from("cabins");

  // A) CREATE new cabin
  if (!normalizedId) query = query.insert([{ ...newCabin, image: imagePath }]);

  // B) EDIT existing cabin
  if (normalizedId)
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq("id", normalizedId);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created or updated");
  }

  // 🗂️ Skip image upload if already uploaded
  if (hasImagePath) return data;

  // 📤 Upload image to Supabase Storage
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 🧹 Rollback if upload fails
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }

  return data;
}

// Delete a cabin
export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}
