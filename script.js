const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        /*each letter will delay move up after 50ms, cause we take arrays each index which represents letter and make
        * up there delay time by 50ms so first 50ms second 100ms and so on*/
        .map((letter, idx) => `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`)
        .join('') /*concatenating array, basically putting all letters in one word back again*/
})