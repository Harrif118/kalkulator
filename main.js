document.addEventListener('DOMContentLoaded', function () {
    // document.addEventListener('DOMContentLoaded', function () {...}): Ini memastikan bahwa semua konten HTML telah dimuat sebelum menjalankan skrip JavaScript.
    let buttons = document.querySelector('.buttons');
    let value = document.getElementById('value');
    let toggleBtn = document.querySelector('.toggleBtn');
    // let buttons = document.querySelector('.buttons');: Mengambil referensi ke elemen HTML dengan kelas "buttons", yang berisi tombol-tombol kalkulator.
    // let value = document.getElementById('value');: Mengambil referensi ke elemen HTML dengan ID "value", yang menampilkan input dan output kalkulator.
    // let toggleBtn = document.querySelector('.toggleBtn');: Mengambil referensi ke elemen HTML dengan kelas "toggleBtn", yang mungkin adalah tombol untuk mengaktifkan atau menonaktifkan mode gelap.
    buttons.addEventListener('click', function (event) {
        let clickedElement = event.target;
        // buttons.addEventListener('click', function (event) {...}): Menambahkan event listener untuk menghandle klik pada area tombol-tombol kalkulator.
        if (clickedElement.tagName === 'SPAN') {
            handleButtonClick(clickedElement.innerText);
        }
    }); 
    
    document.addEventListener('keydown', function (event) {
        handleKeyPress(event.key);
    });
    // document.addEventListener('keydown', function (event) {...}): Menambahkan event listener untuk menghandle ketukan tombol pada keyboard.
    toggleBtn.addEventListener('click', function () {
        toggleDarkMode();
    });
    // toggleBtn.addEventListener('click', function () {...}): Menambahkan event listener untuk menghandle klik pada tombol mode gelap.
    function handleButtonClick(buttonText) {
        let lastChar = value.textContent.charAt(value.textContent.length - 1);

        if (buttonText === '=') {
            calculateResult();
        } else if (buttonText === 'Clear') {
            clearInput();
        } else if (buttonText === 'D') {
            backspace();
        } else {
            if (value.textContent.length >= 14) {
                return; // Limit input to 14 characters
            }

            if (isOperator(buttonText) && isOperator(lastChar)) {
                return; // Prevent consecutive operators
            }

            value.textContent += buttonText;
        }
    }
    // Fungsi-fungsi seperti handleButtonClick, handleKeyPress, calculateResult, clearInput, backspace, dan isOperator 
    // digunakan untuk menangani aksi pengguna seperti menekan tombol, menghitung hasil, membersihkan input, menghapus 
    // karakter terakhir, dan memeriksa apakah karakter adalah operator matematika.
    function handleKeyPress(key) {
        if (key.match(/[0-9+\-*/.]/)) {
            handleButtonClick(key);
        } else if (key === 'Enter') {
            calculateResult();
        } else if (key === 'Escape') {
            clearInput();
        } else if (key === 'Backspace') {
            backspace();
        }
    }

    function calculateResult() {
        value.textContent = eval(value.textContent);
    }

    function clearInput() {
        value.textContent = '';
    }

    function backspace() {
        value.textContent = value.textContent.slice(0, -1);
    }

    function isOperator(char) {
        return char === '/' || char === '*' || char === '+' || char === '-' || char === '.';
    }

    function toggleDarkMode() {
        document.body.classList.toggle('dark');
    }
});
// function toggleDarkMode() {...}: Ini adalah fungsi untuk mengaktifkan atau menonaktifkan
// mode gelap dengan menambah atau menghapus kelas 'dark-mode' dari elemen body dokumen.