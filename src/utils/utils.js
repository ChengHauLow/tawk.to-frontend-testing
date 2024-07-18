export const convertSvgTo64BaseData = (svgIcon)=>{
    const encoder = new TextEncoder();
    // Encode SVG content to a Uint8Array
    const svgBytes = encoder.encode(svgString);
    
    // Convert Uint8Array to a Base64 string
    const base64Encoded = btoa(String.fromCharCode(...svgIcon));
    
    // Create the data URL
    return `data:image/svg+xml;base64,${base64Encoded}`;
}