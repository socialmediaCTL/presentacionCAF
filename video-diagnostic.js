// Video Modal Diagnostic Script
// Paste this in the browser console (F12) to diagnose video issues

console.log('=== VIDEO MODAL DIAGNOSTIC ===');

// Check if video button exists
const videoButton = document.querySelector('button:has(span)');
console.log('Video button found:', videoButton ? 'YES' : 'NO');
if (videoButton) {
    console.log('Button text:', videoButton.textContent);
    console.log('Button classes:', videoButton.className);
}

// Check if modal exists
const modal = document.querySelector('[class*="z-[9999]"]');
console.log('Modal element found:', modal ? 'YES' : 'NO');

// Check if iframe exists
const iframe = document.querySelector('iframe');
console.log('Iframe found:', iframe ? 'YES' : 'NO');
if (iframe) {
    console.log('Iframe src:', iframe.src);
    console.log('Iframe visible:', window.getComputedStyle(iframe).display !== 'none');
}

// Check for React errors
console.log('Check React DevTools for component errors');

// Listen for video button clicks
document.addEventListener('click', (e) => {
    if (e.target.closest('button')) {
        console.log('Button clicked:', e.target.closest('button').textContent);
    }
});

console.log('=== END DIAGNOSTIC ===');
console.log('Instructions:');
console.log('1. Click the "Ver Intro (Cantabria)" button');
console.log('2. Check if modal appears');
console.log('3. Check console for any errors');
