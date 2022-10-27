// TODO: Declare any global variables we need
let FlipHeads = 0
let FlipTails = 0

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    

    // TODO: Add event listener and handler for flip and clear buttons
    document.getElementById('flip').addEventListener('click', () => {
    // Flip Button Click Handler
        // TODO: Determine flip outcome
    let HeadsFlipped = Math.random() < 0.5

        // TODO: Update image and status message in the DOM
       if (HeadsFlipped) {

       // pull heads image out of css
        document.querySelector("#penny-image").src = "assets/images/penny-heads.jpg"
        document.querySelector("message").textContent = "You Flipped Heads!"

        // add 1 each time you flip heads
        FlipHeads +=1 }

        else {

          // pull tails image out of css
        document.querySelector("#penny-image").src = "assets/images/penny-tails.jpg"
        document.querySelector("message").textContent = "You Flipped Tails!"
       
        // add 1 each time you flip heads
        FlipTails += 1
    }
        // Update the scorboard (add ea time heads or tails is flipped)

        let total = FlipHeads + FlipTails

        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails

        let percentOfHeads = 0
        let percentOfTails = 0
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well) 

        // percent has to be higher than zero once you start flipping
        // to get a percent out of 100 multiply your quotient by 100 
        if (total > 0)  {
            percentOfHeads = Math.round((FlipHeads / total) * 100)
            percentOfTails = Math.round((FlipTails / total) * 100)
        }

        // TODO: Update the display of each table cell
        document.querySelector('heads').textContent = FlipHeads
        document.querySelector("heads-percent").textContent = percentOfHeads
        document.querySelector('tails').textContent = FlipTails
        document.querySelector("tails-percent").textContent = percentOfTails
    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})