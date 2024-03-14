
/*Bài 3*/
        const contactForm = document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
          
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            sendMessage(name, email, subject, message);
        });

        function sendMessage(name, email, subject, message) {

            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Subject:', subject);
            console.log('Message:', message);
        }
/*Bài 4*/
        function calculateBMI() {
            var weight = document.getElementById('weight').value;
            var height = document.getElementById('height').value;
            var age = document.getElementById('age').value;
            var bmi = weight / (height * height);
            var resultText = '';

            if (bmi < 18.5) {
                resultText = bmi.toFixed(2) + ' Dưới chuẩn';
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                resultText = bmi.toFixed(2) + ' Bình thường';
            } else if (bmi >= 25 && bmi <= 29.9) {
                resultText = bmi.toFixed(2) + ' Thừa cân';
            } else if (bmi >= 30 && bmi <= 34.9) {
                resultText = bmi.toFixed(2) + ' Béo phì cấp độ 1';
            } else if (bmi >= 35 && bmi <= 39.9) {
                resultText = bmi.toFixed(2) + ' Béo phì cấp độ 2';
            } else {
                resultText = bmi.toFixed(2) + ' Béo phì cấp độ 3';
            }
            if (resultText.includes(' Béo phì cấp độ 1') && (age === 'trung-nien')) {
                resultText += ' - Khám định kỳ';
            } else if (resultText.includes(' Béo phì cấp độ 2') && (age === 'trung-nien' || age === 'gia-lon-tuoi')) {
                resultText += ' - Tập thể dục thường xuyên';
            } else if (resultText.includes(' Béo phì cấp độ 3') && (age === 'gia-lon-tuoi')) {
                resultText += ' - Hạn chế ăn mỡ động vật';
            }
            document.getElementById('bmiResult').innerHTML = resultText;
        }
 /*Bài 5*/
        function login() {
   
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            
            if (username === "admin" && password === "123456") {
                alert("Đăng nhập thành công!");
            } else {
                alert("Tên người dùng hoặc mật khẩu không đúng!");
            }
        
        }
/*Bài 6*/
        function login() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            if (username === "admin" && password === "12345678") {
                alert("Đăng nhập thành công!");
            } else {
                alert("Tên người dùng hoặc mật khẩu không đúng!");
            }
        }

        function signUp() {
            alert("Chức năng đăng ký chưa được triển khai!");
        }
