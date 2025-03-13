// サイドバーを開閉する関数
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const body = document.body;
    
    sidebar.classList.toggle('open');
    body.classList.toggle('sidebar-open');
}

function analyzeData() {
    const inputText = document.getElementById("inputData").value;
    const lines = inputText.split("\n").slice(1).filter(line => line.trim() !== "");

    let leftCounts = {}, middleCounts = {}, rightCounts = {};

    lines.forEach(line => {
        const parts = line.split(/\s+/);
        if (parts.length < 3) return;
        const [left, middle, right] = parts[1].split('-');

        leftCounts[left] = (leftCounts[left] || 0) + 1;
        middleCounts[middle] = (middleCounts[middle] || 0) + 1;
        rightCounts[right] = (rightCounts[right] || 0) + 1;
    });

    function getTopCounts(counts, topN) {
        return Object.entries(counts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, topN)
            .map(([num, count]) => `<strong>${num}</strong>: ${count}回`)
            .join("<br>");
    }

    const leftTopN = parseInt(document.getElementById("leftTop").value);
    const middleTopN = parseInt(document.getElementById("middleTop").value);
    const rightTopN = parseInt(document.getElementById("rightTop").value);

    document.getElementById("leftResult").innerHTML = getTopCounts(leftCounts, leftTopN);
    document.getElementById("middleResult").innerHTML = getTopCounts(middleCounts, middleTopN);
    document.getElementById("rightResult").innerHTML = getTopCounts(rightCounts, rightTopN);
}
