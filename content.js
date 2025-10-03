let totalGrids = 0;
const totalGridSpan = document.querySelector('.r-grid-total-records');
if (totalGridSpan) {
	totalGrids = parseInt(totalGridSpan.textContent.replace(/\D/g, ''));
}

document.addEventListener("DOMContentLoaded", changeColor);
const observer = new MutationObserver(changeColor);
observer.observe(document.body, {
	childList: true, subtree: true
});

function changeColor() {
	const noMatch = document.getElementById("total_no_alerts");
	if (noMatch && totalGrids > 40) {
		const noMatchCount = parseInt(noMatch.textContent.trim()) || 0;
		if (noMatchCount % 40 === 0 || noMatchCount === totalGrids) {
			noMatch.style.color = "green";
		} else {
			noMatch.style.color = "red";
		}
	}
}