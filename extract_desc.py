import os
import glob
import json

skills_dir = r"C:\Users\Sergio\.gemini\antigravity\skills"
skill_files = glob.glob(os.path.join(skills_dir, "*", "SKILL.md"))

data = {}
for file in skill_files:
    with open(file, "r", encoding="utf-8") as f:
        in_yaml = False
        desc = ""
        for line in f:
            if line.strip() == "---":
                in_yaml = not in_yaml
                continue
            if in_yaml and line.startswith("description:"):
                desc = line.strip()[len("description:"):].strip()
                # remove quotes if any
                if desc.startswith("'") and desc.endswith("'"):
                    desc = desc[1:-1]
                elif desc.startswith('"') and desc.endswith('"'):
                    desc = desc[1:-1]
                data[file] = desc
                break

with open("skills_desc.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
print("Extracted", len(data), "descriptions.")
