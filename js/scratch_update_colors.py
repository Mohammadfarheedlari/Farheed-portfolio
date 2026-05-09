import re

filepath = r'c:\Users\farhe\OneDrive\Desktop\Farheed-Portfolio main\css\style.css'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace light blue accent rgba(42, 133, 200, X) with new indigo accent rgba(99, 102, 241, X)
content = re.sub(r'rgba\(\s*42\s*,\s*133\s*,\s*200\s*,\s*([0-9.]+)\s*\)', r'rgba(99, 102, 241, \1)', content)

# Replace darker blue rgba(42, 100, 160, X) with generic dark shadow/accent
content = re.sub(r'rgba\(\s*42\s*,\s*100\s*,\s*160\s*,\s*([0-9.]+)\s*\)', r'rgba(0, 0, 0, \1)', content)

# Replace dark secondary blue rgba(26, 95, 160, X) with new purple accent rgba(168, 85, 247, X)
content = re.sub(r'rgba\(\s*26\s*,\s*95\s*,\s*160\s*,\s*([0-9.]+)\s*\)', r'rgba(168, 85, 247, \1)', content)

# Replace orange accent rgba(232, 160, 32, X) with cyan accent rgba(14, 165, 233, X)
content = re.sub(r'rgba\(\s*232\s*,\s*160\s*,\s*32\s*,\s*([0-9.]+)\s*\)', r'rgba(14, 165, 233, \1)', content)

# Replace light bg rgba(244, 248, 252, 0.96) with dark glass bg
content = re.sub(r'rgba\(\s*244\s*,\s*248\s*,\s*252\s*,\s*0\.96\s*\)', r'rgba(10, 15, 24, 0.85)', content)

# Replace linear-gradient light colors with dark
content = content.replace('linear-gradient(135deg, #ddeef8, #c8e3f5)', 'var(--gradient)')
content = content.replace('rgba(255,255,255,0.95)', 'var(--glass-bg)')
content = content.replace('rgba(255,255,255,0.9)', 'var(--text-primary)')
content = content.replace('rgba(255,255,255,0.5)', 'rgba(255,255,255,0.05)')
content = content.replace('background: #fff', 'background: var(--bg-card)')
content = content.replace('background: #ffffff', 'background: var(--bg-card)')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("CSS updated successfully.")
