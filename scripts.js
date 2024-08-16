// scripts.js
document.addEventListener('DOMContentLoaded', (event) => {
    // 검색 폼과 검색 버튼 가져오기
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const googleSearchButton = document.getElementById('googleSearch');
    const feelingLuckyButton = document.getElementById('feelingLucky');

    // 검색 폼 제출 이벤트 처리
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault(); // 폼의 기본 동작 방지 (페이지 새로 고침 방지)
        const query = searchInput.value;
        console.log('검색어:', query); // 콘솔에 검색어 출력
        // 추가적인 검색 처리 로직을 여기에 작성할 수 있습니다.
    });

    // Google Search 버튼 클릭 이벤트 처리
    googleSearchButton.addEventListener('click', () => {
        const query = searchInput.value;
        console.log('Google Search 클릭됨. 검색어:', query); // 콘솔에 검색어 출력
        // Google 검색 페이지로 리디렉션 (예시)
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    });

    // I'm Feeling Lucky 버튼 클릭 이벤트 처리
    feelingLuckyButton.addEventListener('click', () => {
        const query = searchInput.value;
        console.log('I\'m Feeling Lucky 클릭됨. 검색어:', query); // 콘솔에 검색어 출력
        // I'm Feeling Lucky 페이지로 리디렉션 (예시)
        window.location.href = `https://www.google.com/search?btnI=I%27m+Feeling+Lucky&q=${encodeURIComponent(query)}`;
    });
});
