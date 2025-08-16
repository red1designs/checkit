let pin = '';

function addDigit(digit) {
    if (pin.length < 6) {
        pin += digit;
        document.getElementById('pin').value = '•'.repeat(pin.length);
    }
}

function checkPin() {
    const correctPin = "";  // الرقم السري الصحيح

    if (pin.length === 6) {
        window.location.href = `https://portvipassword${pin}`;  // هنا يتم تحويلك إلى الصفحة المطلوبة
    }
}
