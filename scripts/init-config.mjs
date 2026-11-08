// scripts/init-config.ts
import fs from "fs";
import path from "path";

const CONFIG_DIR = path.join(process.cwd(), "config");
const EXAMPLE_DIR = path.join(CONFIG_DIR, "sample-data");
const USER_DIR = path.join(CONFIG_DIR, "user-data");

// check if user-data directory exists and there are no files in it
if (fs.existsSync(USER_DIR) && fs.readdirSync(USER_DIR).length > 0) {
  console.log("User data already exists. Skipping initialization.");
  process.exit(0);
}

// Create user directory if it doesn't exist
if (!fs.existsSync(USER_DIR)) {
  fs.mkdirSync(USER_DIR, { recursive: true });
}

// Copy example files to user directory
fs.readdirSync(EXAMPLE_DIR).forEach((file) => {
  const sourcePath = path.join(EXAMPLE_DIR, file);
  const targetPath = path.join(USER_DIR, file.replace(".sample", ""));

  if (!fs.existsSync(targetPath)) {
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`Created ${targetPath}`);
  }
});
