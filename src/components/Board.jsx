import React from "react";
import Event from './Event'



const Board = () => {

    return (
        <div className="Board">
            <div className="Card">
                <Event image="https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/302055358_170733165490184_5368292356588817126_n.png?_nc_cat=109&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=cW9hRUzn5RcAX__-Ldi&_nc_ht=scontent-bos5-1.xx&oh=00_AfDOSDFfmFfeRCiSsyBt8MpPzi1LncyE9NCOHqKQMwQiQA&oe=650E2B14" name="Chinese" description="View Menu" link="https://www.orientalflavoramherst.com/?utm_source=gmb&utm_medium=website"/>
                <Event image="https://media-cdn.tripadvisor.com/media/photo-s/19/61/50/01/entrance-to-miss-saigon.jpg" name="Vietnamese" description="View Menu" link="https://www.misssaigonamherst.com/menu"/>
                <Event image="https://s3-media0.fl.yelpcdn.com/bphoto/jdlYCueYrsyNXFKHEFhrrg/o.jpg" name="Korean" description="View Menu" link="https://www.yelp.com/biz/house-of-teriyaki-amherst"/>
                <Event image="https://upload.wikimedia.org/wikipedia/en/3/3b/Chipotle_Mexican_Grill_logo.svg" name="Mexican" description="View Menu" link="https://www.chipotle.com/"/>
                <Event image="https://upload.wikimedia.org/wikipedia/en/b/b3/Taco_Bell_2016.svg" name="American" description="View Menu" link="https://www.tacobell.com/"/>
            </div>
            <div className="Card">
                <Event image="https://www.kark.com/wp-content/uploads/sites/85/2021/12/OliveGardenGettyImages-1326009258.jpg?w=960&h=540&crop=1" name="Italian" description="View Menu" link="https://www.olivegarden.com/home"/>
                <Event image="https://umassdining.com/sites/default/files/images/wasabi.jpg" name="Japanese" description="View Menu" link="https://umassdining.com/locations-menus/campus-center/wasabi"/>
                <Event image="https://static.wixstatic.com/media/f6d28f_1dd8bd93d4e04f6097e122068c419ca8~mv2.png/v1/crop/x_243,y_517,w_1147,h_643/fill/w_276,h_153,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Pita%20Pockets.png" name="Mediterranean" description="View Menu" link="https://www.pitapocketsamherst.com/"/>
                <Event image="https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/275308086_331546128990355_8104756135091126359_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=gk0Xe8qUm5gAX86vSH8&_nc_ht=scontent-bos5-1.xx&oh=00_AfAvh9x2Ppu6YFZe58bqCezYsbg9-LAX_8HL1oQyJP8A9Q&oe=650EB3CA" name="Indian" description="View Menu" link="https://paradiseofindia.com/"/>
                <Event image="https://www.kosharimama.com/wp-content/uploads/2019/09/KMama-logo12BB-300.gif" name="Egyptian" description="View Menu" link="https://www.kosharimama.com/"/>

            </div>
            
        </div>

    )
}


export default Board;