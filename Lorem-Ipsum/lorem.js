const text = [
    `There was little doubt that the bridge was unsafe. All one had to do was look at it to know that
     with certainty. Yet Bob didn't see another option. He may have been able to work one out if he had
    a bit of time to think things through, but time was something he didn't have. A choice needed to be
    made, and it needed to be made quickly.`,
    `I recollect that my first exploit in squirrel-shooting was in a grove of tall walnut-trees that
     shades one side of the valley. I had wandered into it at noontime, when all nature is peculiarly
    quiet, and was startled by the roar of my own gun, as it broke the Sabbath stillness around and
    was prolonged and reverberated by the angry echoes.`,
    `There were only two ways to get out of this mess if they all worked together. The problem was that
     neither was all that appealing. One would likely cause everyone a huge amount of physical pain while
    the other would likely end up with everyone in jail. In Sam's mind, there was only one thing to do.
     He threw everyone else under the bus and he secretly sprinted away leaving the others to take the
    fall without him.`,
    `A long black shadow slid across the pavement near their feet and the five Venusians, very much 
    startled, looked overhead. They were barely in time to see the huge gray form of the carnivore before 
    it vanished behind a sign atop a nearby building which bore the mystifying information "Pepsi-Cola."`,
    `He had three simple rules by which he lived. The first was to never eat blue food. There was nothing 
    in nature that was edible that was blue. People often asked about blueberries, but everyone knows 
    those are actually purple. He understood it was one of the stranger rules to live by, but it had 
    served him well thus far in the 50+ years of his life.`,
    `She had come to the conclusion that you could tell a lot about a person by their ears. The way they 
    tuck out and the size of the earlobes could give you wonderful insights into the person. Of course, 
    she couldn't scientifically prove any of this, but that didn't matter to her. Before anything else, 
    she would size up the ears of the person she was talking to.`,
    `Peter always saw the world in black and white. There were two choices for every situation and you 
    had to choose one of them. It was therefore terribly uncomfortable for him to spend time with Ashley. 
    She saw the world in shades of gray with hundreds of choices to choose from in every situation.`,
    `He looked at the sand. Picking up a handful, he wondered how many grains were in his hand. Hundreds 
    of thousands? "Not enough," the said under his breath. I need more.`,
    `There was a reason for her shyness. Everyone assumed it had always been there but she knew better. 
    She knew the exact moment that the shyness began. It had been that fateful moment at the lake. There 
    are just some events that do that to you.`,
    `The paper was blank. It shouldn't have been. There should have been writing on the paper, at least 
    a paragraph if not more. The fact that the writing wasn't there was frustrating. Actually, it was 
    even more than frustrating. It was downright distressing.`,
];

const form = document.querySelector('.lorem-form');
const amount = document.getElementById('amount');
const para = document.querySelector('.lorem-text');

form.addEventListener('submit',function(e){
     e.preventDefault();
     const value = parseInt(amount.value);
     const random = Math.floor(Math.random()*text.length);

     if(isNaN(value) || value <= 0 || value > text.length-1){
       para.innerHTML = `<p class = "result">${text[random]}</p>`
       window.alert("Write the input in range 1-9");
     }
     else{
        let tempText = text.slice(0,value);
        tempText = tempText.map(function(item){
            return `<p class = "result">${item}</p>`
        }).join("");
        para.innerHTML = tempText;
     }
});
