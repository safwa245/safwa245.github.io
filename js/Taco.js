// التحقق من صحة البيانات في النموذج
document.getElementById('contact-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementByid('message').value;

    // تحقق من أن الحقول غير فارغة
    if (!name || !email || !message) {
        alert('يرجى ملء جميع الحقول.');
        event.preventDefault();
    }
});

// التخزين المحلي
localStorage.setItem('restaurantName', 'Pablo');
const restaurantName = localStorage.getItem('restaurantName');
console.log(`Welcome to ${restaurantName} Restaurant!`);
