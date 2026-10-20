import { Filesystem, Directory } from "@capacitor/filesystem";
import { Share } from "@capacitor/share";

// Saves a base64 file into the app cache, then opens the Android share sheet
// so the file can be stored (Files, Gallery) or sent (WhatsApp, Telegram...).
window.NativeSave = async function (base64, filename) {
  const r = await Filesystem.writeFile({ path: filename, data: base64, directory: Directory.Cache });
  await Share.share({ title: "كشف المحفظة", url: r.uri, dialogTitle: "حفظ أو مشاركة" });
};
