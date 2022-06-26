
// will save scores in local storage
const containerScoresEl = document.getElementById('container-score');
const clearHighScoreBtn = document.getElementById('btn-score')

const getScore = () => {
    let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    containerScoresEl.textContent = '';
    
    highScores.sort(function(a, b) {
        return (b.score) - (a.score);
    });

    for(let i = 0; i < highScores.length; i++) {
        (highScores[i].score);

        let nameScore = document.createElement('p');
        nameScore.textContent = highScores[i].name + ': ' + highScores[i].score;
        containerScoresEl.append(nameScore);

    }
}

const clearScore = () => {
localStorage.removeItem('highScores');
location.reload();

}

clearHighScoreBtn.onclick = clearScore;
getScore();