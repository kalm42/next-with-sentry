import React, { Component } from 'react'

class index extends Component {
  // static getInitialProps() {
  //   throw new Error('Server-side: Get initial props error.')
  // }

  // componentDidMount() {
  //   throw new Error('Client-side: Component level error.')
  // }

  throwError = () => {
    throw new Error('Client-side: Functional error')
  }

  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <p>This is an example site for testing/showing nextjs and sentry integration.</p>
        <button type="button" onClick={this.throwError}>
          Press me to throw an error
        </button>
        <p>
          readymade cardigan 90&#39;s iPhone drinking vinegar keffiyeh actually direct trade
          wayfarers master cleanse organic Banksy selvage heirloom ennui hashtag Odd Future
          single-origin coffee chillwave salvia before they sold out photo booth locavore fanny pack
          vegan Bushwick Cosby sweater bespoke fap meggings viral swag skateboard YOLO Thundercats
          hoodie High Life DIY jean shorts lomo fixie food truck small batch farm-to-table Helvetica
          street art keytar Schlitz next level ethical meh craft beer typewriter 8-bit Carles raw
          denim fingerstache post-ironic sriracha pour-over mixtape kale chips VHS art party Neutra
          Shoreditch XOXO tousled gentrify slow-carb cornhole Tonx sartorial whatever semiotics
          brunch trust fund fashion axe scenester church-key kitsch Portland retro leggings American
          Apparel put a bird on it 3 wolf moon normcore freegan irony stumptown mlkshk letterpress
          kogi Tumblr synth sustainable seitan vinyl +1 try-hard mustache flexitarian cred banjo
          hella bicycle rights paleo pop-up Wes Anderson squid chia bitters you probably haven&#39;t
          heard of them pug Echo Park Etsy blog Kickstarter shabby chic Pitchfork banh mi Austin yr
          roof party beard dreamcatcher gluten-free McSweeney&#39;s tofu flannel cliche Pinterest
          quinoa butcher Truffaut chambray crucifix PBR Blue Bottle narwhal Brooklyn disrupt pickled
          Marfa pork belly PBR&amp;B ugh cray wolf twee Godard plaid Williamsburg biodiesel selfies
          gastropub distillery authentic Intelligentsia deep v literally artisan Vice polaroid tote
          bag four loko asymmetrical mumblecore occupy tattooed umami messenger bag lo-fi aesthetic
          forage
        </p>
        <p>
          Shoreditch typewriter distillery gentrify actually messenger bag XOXO fashion axe put a
          bird on it art party deep v irony gluten-free fap cred forage umami Cosby sweater seitan
          mustache chambray chillwave roof party wayfarers street art master cleanse Marfa hoodie
          drinking vinegar semiotics Banksy PBR&amp;B raw denim Bushwick you probably haven&#39;t
          heard of them biodiesel squid mlkshk sartorial Echo Park tousled sriracha narwhal shabby
          chic viral stumptown swag Vice trust fund Portland pickled paleo before they sold out
          flexitarian farm-to-table try-hard Brooklyn normcore readymade Godard synth Thundercats
          flannel Odd Future slow-carb leggings fingerstache cornhole Tonx Wes Anderson Carles
          post-ironic whatever letterpress tattooed cliche Tumblr salvia lomo hella High Life keytar
          meggings vinyl iPhone lo-fi literally photo booth quinoa Pinterest +1 ethical bespoke kale
          chips chia 3 wolf moon heirloom small batch retro food truck authentic PBR freegan vegan
          tote bag yr asymmetrical ugh church-key pug Intelligentsia pour-over polaroid brunch
          Austin dreamcatcher Kickstarter fanny pack fixie McSweeney&#39;s Truffaut selfies cardigan
          Blue Bottle beard Schlitz pop-up banjo crucifix Pitchfork Williamsburg cray blog kogi
          Neutra pork belly sustainable mumblecore keffiyeh hashtag direct trade gastropub occupy
          wolf jean shorts mixtape selvage single-origin coffee YOLO DIY kitsch butcher artisan VHS
          disrupt 8-bit meh American Apparel bicycle rights 90&#39;s plaid four loko locavore Etsy
          tofu aesthetic ennui craft beer Helvetica bitters scenester next level twee banh mi
          skateboard organic
        </p>
        <p>
          Williamsburg gastropub Cosby sweater 90&#39;s 3 wolf moon XOXO whatever flannel Etsy
          Austin Shoreditch polaroid wayfarers bicycle rights crucifix mlkshk keytar vinyl drinking
          vinegar narwhal tattooed meh leggings Portland sustainable flexitarian selfies gluten-free
          tousled hashtag Odd Future freegan single-origin coffee Godard art party asymmetrical DIY
          forage viral before they sold out food truck direct trade +1 tofu put a bird on it disrupt
          hella mustache blog chillwave lomo shabby chic street art pour-over banjo letterpress
          Schlitz deep v Blue Bottle Helvetica kitsch beard kogi try-hard McSweeney&#39;s typewriter
          plaid biodiesel artisan Marfa Carles cardigan chambray ugh aesthetic fanny pack paleo
          slow-carb sriracha actually Thundercats farm-to-table twee bespoke Kickstarter organic
          quinoa squid readymade trust fund VHS swag wolf vegan cliche post-ironic Brooklyn yr
          locavore Tumblr YOLO normcore church-key photo booth four loko PBR cray Echo Park High
          Life iPhone Neutra literally keffiyeh heirloom Banksy pug lo-fi Pinterest sartorial tote
          bag raw denim fixie seitan fap hoodie roof party synth gentrify Bushwick small batch
          fingerstache Truffaut mumblecore Wes Anderson ethical bitters PBR&amp;B meggings
          Intelligentsia stumptown skateboard distillery umami cornhole retro butcher craft beer
          ennui irony Pitchfork fashion axe 8-bit semiotics next level American Apparel Vice chia
          scenester banh mi brunch selvage master cleanse pickled mixtape authentic pop-up occupy
          Tonx pork belly cred dreamcatcher salvia jean shorts kale chips you probably haven&#39;t
          heard of them messenger bag
        </p>
        <p>
          distillery 3 wolf moon Pinterest chia flexitarian typewriter brunch synth paleo disrupt
          deep v mlkshk Marfa bitters Neutra mixtape ennui tattooed literally meh 90&#39;s narwhal
          hoodie umami meggings put a bird on it leggings fingerstache blog dreamcatcher cornhole
          lomo Tumblr semiotics direct trade Tonx stumptown pour-over mumblecore Wes Anderson art
          party fap hella tote bag PBR&amp;B pickled Pitchfork chambray forage irony plaid
          sustainable you probably haven&#39;t heard of them American Apparel pop-up ugh PBR
          crucifix +1 sriracha kogi Echo Park keffiyeh squid chillwave messenger bag gentrify keytar
          DIY iPhone fixie Portland lo-fi bespoke normcore jean shorts master cleanse banh mi
          actually hashtag wayfarers tofu occupy freegan farm-to-table scenester ethical retro
          gastropub Blue Bottle twee beard butcher sartorial yr viral 8-bit four loko skateboard
          seitan gluten-free selfies Brooklyn single-origin coffee tousled before they sold out
          aesthetic pug cliche trust fund vinyl swag vegan locavore biodiesel Vice salvia quinoa
          cardigan Godard Shoreditch letterpress try-hard mustache Williamsburg slow-carb cray
          shabby chic roof party kitsch small batch Austin flannel asymmetrical Helvetica
          post-ironic pork belly food truck bicycle rights Carles polaroid fanny pack selvage High
          Life Truffaut raw denim authentic next level wolf Kickstarter craft beer Bushwick Etsy
          banjo kale chips heirloom cred organic artisan XOXO church-key whatever VHS
          McSweeney&#39;s Cosby sweater YOLO readymade photo booth Odd Future Schlitz drinking
          vinegar fashion axe street art Banksy Intelligentsia Thundercats
        </p>
        <p>
          seitan iPhone small batch Brooklyn YOLO chia craft beer chillwave shabby chic tote bag
          occupy fingerstache crucifix flannel yr blog banh mi fixie DIY organic synth put a bird on
          it Vice readymade trust fund lo-fi bespoke pop-up drinking vinegar jean shorts authentic
          Williamsburg flexitarian butcher raw denim roof party hella sriracha Truffaut chambray ugh
          Etsy Portland next level +1 before they sold out umami direct trade plaid photo booth lomo
          cred keffiyeh wayfarers whatever semiotics Cosby sweater leggings asymmetrical XOXO Godard
          master cleanse forage slow-carb dreamcatcher fashion axe selvage Kickstarter Odd Future
          pickled street art Wes Anderson swag kogi Helvetica Austin church-key ennui squid
          Thundercats Blue Bottle letterpress pork belly bitters PBR&amp;B gluten-free art party
          hashtag cardigan ethical kitsch mixtape literally mumblecore stumptown post-ironic tousled
          Tonx gentrify Banksy PBR narwhal salvia farm-to-table tofu cliche wolf Bushwick cray
          try-hard viral actually 3 wolf moon mustache bicycle rights keytar fap freegan normcore
          Pitchfork kale chips vinyl Shoreditch heirloom McSweeney&#39;s four loko scenester
          cornhole polaroid you probably haven&#39;t heard of them VHS mlkshk skateboard 8-bit meh
          aesthetic single-origin coffee tattooed sustainable disrupt pour-over Neutra retro Echo
          Park food truck meggings pug irony selfies beard Carles banjo Tumblr deep v Schlitz High
          Life messenger bag 90&#39;s hoodie brunch typewriter sartorial American Apparel paleo
          artisan quinoa gastropub Pinterest biodiesel vegan Intelligentsia locavore fanny pack
          distillery Marfa twee
        </p>
      </div>
    )
  }
}

export default index
