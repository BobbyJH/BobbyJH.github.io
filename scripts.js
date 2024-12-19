// 기존 방문자 수 카운트 코드
let visitorCount = 0;
document.getElementById('visitorCount').textContent = visitorCount;

// 기존 끝말잇기 게임 코드
let words = [];

function submitWord() {
    const input = document.getElementById('wordInput');
    const word = input.value.trim();
    
    if (word) {
        words.push(word);
        document.getElementById('wordList').textContent = words.join(', ');
        input.value = '';
    }
}

// 새로운 갤러리 기능
document.addEventListener('DOMContentLoaded', function() {
    // 이미지 지연 로딩
    const images = document.querySelectorAll('.gallery-item img');
    images.forEach(img => {
        img.loading = 'lazy';
    });
});
