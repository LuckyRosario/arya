
import seven from "../images/7.jpg"
import eight from "../images/8.jpg"
import nine from "../images/9.jpg"
import ten from "../images/10.jpg"
import eleven from "../images/11.jpg"
import thirteen from "../images/13.jpg"
import Cards from "../components/Card"

export default function CardGroup(){
    
    return (
        <div class="container-fluid">
    <div class="row flex-row flex-nowrap">
        <div class="col-3">
            <div class="card card-block"><Cards src={seven} title="Super Daughter" text="She never fails to put a smile on my face!" /></div>
        </div>
        <div class="col-3">
            <div class="card card-block"><Cards src={eight} title="Mommy's Little Princess" text="She loves Minnie Mouse still!"/></div>
        </div>
        <div class="col-3">
            <div class="card card-block"><Cards src={nine} title="Silly Cousins" text="What better time to act silly than a beautiful Easter Sunday!"/></div>
        </div>
        <div class="col-3">
            <div class="card card-block"><Cards src={ten} title="Hope Floats" text="She is growing so fast!" /></div>
        </div>
        <div class="col-3">
            <div class="card card-block"><Cards src={eleven} title="Beautiful Belle" text="I used to really love Halloween as a child so I try to make it fun for her."/></div>
        </div>
        <div class="col-3">
            <div class="card card-block"><Cards src={thirteen} title="Winter Wonder" text="Enjoying this special Sunday post Holiday season!" /></div>
        </div>
    </div>
</div>
    )
}