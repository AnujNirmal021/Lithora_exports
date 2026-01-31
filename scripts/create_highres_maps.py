from PIL import Image, ImageDraw, ImageFont
import os

out_dir = r'c:\Users\91940\OneDrive\Desktop\lithora-exports\public\assets\generated'
os.makedirs(out_dir, exist_ok=True)

# Helper to create a stylized world-map-like placeholder
def make_map(path, w, h, title="LITHORA EXPORTS - GLOBAL PRESENCE"):
    img = Image.new('RGB', (w, h), (34, 150, 200))
    draw = ImageDraw.Draw(img)

    # Draw continent-like blobs (simplified)
    draw.ellipse((int(w*0.05), int(h*0.25), int(w*0.28), int(h*0.6)), fill=(200,200,200)) # NA
    draw.ellipse((int(w*0.3), int(h*0.15), int(w*0.46), int(h*0.35)), fill=(220,220,220)) # Europe
    draw.ellipse((int(w*0.45), int(h*0.3), int(w*0.7), int(h*0.6)), fill=(230,230,230)) # Africa/Asia
    draw.ellipse((int(w*0.75), int(h*0.45), int(w*0.95), int(h*0.7)), fill=(240,240,240)) # Australia

    # Add highlighted circles for markets (approx positions)
    highlights = [
        (int(w*0.2), int(h*0.33)), # North America
        (int(w*0.38), int(h*0.22)), # Europe
        (int(w*0.58), int(h*0.38)), # Middle East
        (int(w*0.85), int(h*0.55)), # Australia
    ]
    for (x,y) in highlights:
        draw.ellipse((x-20,y-20,x+20,y+20), fill=(255,165,70))
        draw.ellipse((x-28,y-28,x+28,y+28), outline=(255,200,120), width=3)

    # Title
    try:
        font = ImageFont.truetype('arial.ttf', max(18, int(w/60)))
    except Exception:
        font = None
    draw.text((20, 20), title, fill=(255,255,255), font=font)

    img.save(path, optimize=True)
    print(f"Wrote {path} ({w}x{h})")

# Generate 3 sizes
make_map(os.path.join(out_dir, 'world-map-highres-1920.png'), 1920, 1080)
make_map(os.path.join(out_dir, 'world-map-highres-1200.png'), 1200, 675)
make_map(os.path.join(out_dir, 'world-map-highres-800.png'), 800, 450)
