interface DropdownOption {
	text: string;
	value: string;
}

const icons: DropdownOption[] = [
	{
		text: '.NET',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/dot-net.svg'
	},
	{
		text: '500px',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/500px.svg'
	},
	{
		text: 'About.me',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/about-dot-me.svg'
	},
	{
		text: 'ACM',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/acm.svg'
	},
	{
		text: 'AddThis',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/addthis.svg'
	},
	{
		text: 'Adobe',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobe.svg'
	},
	{
		text: 'Adobe Acrobat Reader',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobeacrobatreader.svg'
	},
	{
		text: 'Adobe After Effects',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobeaftereffects.svg'
	},
	{
		text: 'Adobe Audition',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobeaudition.svg'
	},
	{
		text: 'Adobe Dreamweaver',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobedreamweaver.svg'
	},
	{
		text: 'Adobe Illustrator',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobeillustrator.svg'
	},
	{
		text: 'Adobe InDesign',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobeindesign.svg'
	},
	{
		text: 'Adobe Lightroom CC',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobelightroomcc.svg'
	},
	{
		text: 'Adobe Lightroom Classic',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobelightroomclassic.svg'
	},
	{
		text: 'Adobe Photoshop',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobephotoshop.svg'
	},
	{
		text: 'Adobe Premiere',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobepremiere.svg'
	},
	{
		text: 'Adobe Typekit',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobetypekit.svg'
	},
	{
		text: 'Adobe XD',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobexd.svg'
	},
	{
		text: 'Airbnb',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/airbnb.svg'
	},
	{
		text: 'Amazon',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazon.svg'
	},
	{
		text: 'Amazon AWS',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonaws.svg'
	},
	{
		text: 'AMD',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amd.svg'
	},
	{
		text: 'American Express',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/americanexpress.svg'
	},
	{
		text: 'Android',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/android.svg'
	},
	{
		text: 'AngelList',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/angellist.svg'
	},
	{
		text: 'Angular',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/angular.svg'
	},
	{
		text: 'Angular Universal',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/angularuniversal.svg'
	},
	{
		text: 'Apache',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/apache.svg'
	},
	{
		text: 'Apple',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/apple.svg'
	},
	{
		text: 'Apple Music',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/applemusic.svg'
	},
	{
		text: 'Apple Pay',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/applepay.svg'
	},
	{
		text: 'AppVeyor',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/appveyor.svg'
	},
	{
		text: 'Arch Linux',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/archiveofourown.svg'
	},
	{
		text: 'Archive of Our Own',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/archlinux.svg'
	},
	{
		text: 'ArtStation',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/artstation.svg'
	},
	{
		text: 'Asana',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/asana.svg'
	},
	{
		text: 'Atlassian',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/at-and-t.svg'
	},
	{
		text: 'Atom',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/atlassian.svg'
	},
	{
		text: 'AT&T',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/atom.svg'
	},
	{
		text: 'Aurelia',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/aurelia.svg'
	},
	{
		text: 'Auth0',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/auth0.svg'
	},
	{
		text: 'Automatic',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/automatic.svg'
	},
	{
		text: 'Autotask',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/autotask.svg'
	},
	{
		text: 'Aventrix',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/aventrix.svg'
	},
	{
		text: 'Azure DevOps',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/azuredevops.svg'
	},
	{
		text: 'Baidu',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/baidu.svg'
	},
	{
		text: 'Bandcamp',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bandcamp.svg'
	},
	{
		text: 'Basecamp',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/basecamp.svg'
	},
	{
		text: 'Bath ASU',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bathasu.svg'
	},
	{
		text: 'Beats',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/beats.svg'
	},
	{
		text: 'Behance',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/behance.svg'
	},
	{
		text: 'Big Cartel',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bigcartel.svg'
	},
	{
		text: 'Bing',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bing.svg'
	},
	{
		text: 'Bit',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bit.svg'
	},
	{
		text: 'Bitbucket',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bitbucket.svg'
	},
	{
		text: 'Bitcoin',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bitcoin.svg'
	},
	{
		text: 'Bitdefender',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bitdefender.svg'
	},
	{
		text: 'Bitly',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bitly.svg'
	},
	{
		text: 'Blender',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/blender.svg'
	},
	{
		text: 'Blogger',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/blogger.svg'
	},
	{
		text: 'Boost',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/boost.svg'
	},
	{
		text: 'Bootstrap',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bootstrap.svg'
	},
	{
		text: 'Bower',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bower.svg'
	},
	{
		text: 'Brand.ai',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/brand-dot-ai.svg'
	},
	{
		text: 'Buffer',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/buffer.svg'
	},
	{
		text: 'Buy Me A Coffee',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/buymeacoffee.svg'
	},
	{
		text: 'BuzzFeed',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/buzzfeed.svg'
	},
	{
		text: 'CakePHP',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/cakephp.svg'
	},
	{
		text: 'Campaign Monitor',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/campaignmonitor.svg'
	},
	{
		text: 'Cash App',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/cashapp.svg'
	},
	{
		text: 'Castorama',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/castorama.svg'
	},
	{
		text: 'Castro',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/castro.svg'
	},
	{
		text: 'CEVO',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/cevo.svg'
	},
	{
		text: 'Chase',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/chase.svg'
	},
	{
		text: 'Circle',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/circle.svg'
	},
	{
		text: 'CircleCI',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/circleci.svg'
	},
	{
		text: 'CiviCRM',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/civicrm.svg'
	},
	{
		text: 'Clockify',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/clockify.svg'
	},
	{
		text: 'Clojure',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/clojure.svg'
	},
	{
		text: 'Cloudflare',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/cloudflare.svg'
	},
	{
		text: 'CMake',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/cmake.svg'
	},
	{
		text: 'Codacy',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/co-op.svg'
	},
	{
		text: 'Codecademy',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/codacy.svg'
	},
	{
		text: 'Code Climate',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/codecademy.svg'
	},
	{
		text: 'Codecov',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/codeclimate.svg'
	},
	{
		text: 'Codeforces',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/codecov.svg'
	},
	{
		text: 'CodeIgniter',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/codeforces.svg'
	},
	{
		text: 'CodePen',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/codeigniter.svg'
	},
	{
		text: 'Coderwall',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/codepen.svg'
	},
	{
		text: 'CodeSandbox',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/coderwall.svg'
	},
	{
		text: 'Codeship',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/codesandbox.svg'
	},
	{
		text: 'Codewars',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/codeship.svg'
	},
	{
		text: 'Codio',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/codewars.svg'
	},
	{
		text: 'CoffeeScript',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/codio.svg'
	},
	{
		text: 'ComproPago',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/coffeescript.svg'
	},
	{
		text: 'Conekta',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/commonworkflowlanguage.svg'
	},
	{
		text: 'Conda-Forge',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/compropago.svg'
	},
	{
		text: 'Co-op',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/conda-forge.svg'
	},
	{
		text: 'Coursera',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/conekta.svg'
	},
	{
		text: 'Adobe Creative Cloud',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobecreativecloud.svg'
	},
	{
		text: 'Creative Commons',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/coursera.svg'
	},
	{
		text: 'CSS3',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/cplusplus.svg'
	},
	{
		text: 'CSS Wizardry',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/creativecommons.svg'
	},
	{
		text: 'Common Workflow Language',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/css3.svg'
	},
	{
		text: 'C++',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/csswizardry.svg'
	},
	{
		text: 'D3.js',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/d3-dot-js.svg'
	},
	{
		text: 'Dailymotion',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/dailymotion.svg'
	},
	{
		text: 'DAZN',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/dazn.svg'
	},
	{
		text: 'dblp',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/dblp.svg'
	},
	{
		text: 'Debian',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/debian.svg'
	},
	{
		text: 'Deezer',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/deezer.svg'
	},
	{
		text: 'Delicious',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/delicious.svg'
	},
	{
		text: 'Dell',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/dell.svg'
	},
	{
		text: 'Deno',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/deno.svg'
	},
	{
		text: 'Dependabot',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/dependabot.svg'
	},
	{
		text: 'Designer News',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/designernews.svg'
	},
	{
		text: 'DeviantArt',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/dev-dot-to.svg'
	},
	{
		text: 'devRant',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/deviantart.svg'
	},
	{
		text: 'dev.to',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/devrant.svg'
	},
	{
		text: 'Diaspora',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/diaspora.svg'
	},
	{
		text: 'Digg',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/digg.svg'
	},
	{
		text: 'DigitalOcean',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/digitalocean.svg'
	},
	{
		text: 'Discord',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/discord.svg'
	},
	{
		text: 'Discourse',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/discourse.svg'
	},
	{
		text: 'Discover',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/discover.svg'
	},
	{
		text: 'Disroot',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/disqus.svg'
	},
	{
		text: 'Disqus',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/disroot.svg'
	},
	{
		text: 'Django',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/django.svg'
	},
	{
		text: 'Docker',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/docker.svg'
	},
	{
		text: 'DocuSign',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/docusign.svg'
	},
	{
		text: 'Draugiem.lv',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/draugiem-dot-lv.svg'
	},
	{
		text: 'Dribbble',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/dribbble.svg'
	},
	{
		text: 'Drone',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/drone.svg'
	},
	{
		text: 'Dropbox',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/dropbox.svg'
	},
	{
		text: 'Drupal',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/drupal.svg'
	},
	{
		text: 'DTube',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/dtube.svg'
	},
	{
		text: 'eBay',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/ebay.svg'
	},
	{
		text: 'EVRY',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/eclipseide.svg'
	},
	{
		text: 'Eclipse IDE',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/elastic.svg'
	},
	{
		text: 'Elastic',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/elasticcloud.svg'
	},
	{
		text: 'Elastic Cloud',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/elasticsearch.svg'
	},
	{
		text: 'Elasticsearch',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/elasticstack.svg'
	},
	{
		text: 'Elastic Stack',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/electron.svg'
	},
	{
		text: 'Electron',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/elementary.svg'
	},
	{
		text: 'elementary',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/ello.svg'
	},
	{
		text: 'Ello',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/empirekred.svg'
	},
	{
		text: 'Empire Kred',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/envato.svg'
	},
	{
		text: 'Envato',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/esea.svg'
	},
	{
		text: 'ESEA',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/eslint.svg'
	},
	{
		text: 'ESLint',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/ethereum.svg'
	},
	{
		text: 'Ethereum',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/etsy.svg'
	},
	{
		text: 'Etsy',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/eventbrite.svg'
	},
	{
		text: 'Eventbrite',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/eventstore.svg'
	},
	{
		text: 'Event Store',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/evernote.svg'
	},
	{
		text: 'Evernote',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/everplaces.svg'
	},
	{
		text: 'Everplaces',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/evry.svg'
	},
	{
		text: 'Experts Exchange',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/expertsexchange.svg'
	},
	{
		text: 'F-Secure',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/f-secure.svg'
	},
	{
		text: 'Facebook',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/facebook.svg'
	},
	{
		text: 'FACEIT',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/faceit.svg'
	},
	{
		text: 'Fandango',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/fandango.svg'
	},
	{
		text: 'Favro',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/favro.svg'
	},
	{
		text: 'FeatHub',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/feathub.svg'
	},
	{
		text: 'Feedly',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/feedly.svg'
	},
	{
		text: 'Fido Alliance',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/fidoalliance.svg'
	},
	{
		text: 'Firebase',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/figma.svg'
	},
	{
		text: 'Fitbit',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/firebase.svg'
	},
	{
		text: 'Flask',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/fitbit.svg'
	},
	{
		text: 'Flattr',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/flask.svg'
	},
	{
		text: 'Flickr',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/flattr.svg'
	},
	{
		text: 'Flipboard',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/flickr.svg'
	},
	{
		text: 'Flutter',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/flipboard.svg'
	},
	{
		text: 'Fnac',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/flutter.svg'
	},
	{
		text: 'Foursquare',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/fnac.svg'
	},
	{
		text: 'Figma',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/foursquare.svg'
	},
	{
		text: 'Framer',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/framer.svg'
	},
	{
		text: 'freeCodeCamp',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/freecodecamp.svg'
	},
	{
		text: 'Fur Affinity',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/furaffinity.svg'
	},
	{
		text: 'Furry Network',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/furrynetwork.svg'
	},
	{
		text: 'Garmin',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/garmin.svg'
	},
	{
		text: 'Gatsby',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gatsby.svg'
	},
	{
		text: 'Gauges',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gauges.svg'
	},
	{
		text: 'Geocaching',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/geocaching.svg'
	},
	{
		text: 'Gerrit',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gerrit.svg'
	},
	{
		text: 'Ghost',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/ghost.svg'
	},
	{
		text: 'Git',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/git.svg'
	},
	{
		text: 'GitHub',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg'
	},
	{
		text: 'GitLab',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gitlab.svg'
	},
	{
		text: 'Gitter',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gitter.svg'
	},
	{
		text: 'Glassdoor',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/glassdoor.svg'
	},
	{
		text: 'Gmail',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gmail.svg'
	},
	{
		text: 'GNU',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gnu.svg'
	},
	{
		text: 'GNU social',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gnusocial.svg'
	},
	{
		text: 'GOG.com',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/go.svg'
	},
	{
		text: 'GoldenLine',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gog-dot-com.svg'
	},
	{
		text: 'Goodreads',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/goldenline.svg'
	},
	{
		text: 'Go',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/goodreads.svg'
	},
	{
		text: 'Google',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/google.svg'
	},
	{
		text: 'Google Allo',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googleallo.svg'
	},
	{
		text: 'Google Chrome',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googleanalytics.svg'
	},
	{
		text: 'Google Analytics',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googlechrome.svg'
	},
	{
		text: 'Google Drive',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googledrive.svg'
	},
	{
		text: 'Google Hangouts',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googlehangouts.svg'
	},
	{
		text: 'Google Hangouts Chat',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googlehangoutschat.svg'
	},
	{
		text: 'Google Keep',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googlekeep.svg'
	},
	{
		text: 'Google Pay',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googlepay.svg'
	},
	{
		text: 'Google Play',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googleplay.svg'
	},
	{
		text: 'Google Podcasts',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googleplus.svg'
	},
	{
		text: 'Google+',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googlepodcasts.svg'
	},
	{
		text: 'GOV.UK',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gov-dot-uk.svg'
	},
	{
		text: 'Grafana',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/grafana.svg'
	},
	{
		text: 'Graphcool',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/graphcool.svg'
	},
	{
		text: 'GraphQL',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/graphql.svg'
	},
	{
		text: 'Grav',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/grav.svg'
	},
	{
		text: 'Gravatar',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gravatar.svg'
	},
	{
		text: 'Groupon',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/groupon.svg'
	},
	{
		text: 'Gulp',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gulp.svg'
	},
	{
		text: 'Gumroad',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gumroad.svg'
	},
	{
		text: 'Gumtree',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gumtree.svg'
	},
	{
		text: 'Hackaday',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/hackaday.svg'
	},
	{
		text: 'HackerRank',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/hackerrank.svg'
	},
	{
		text: 'HackHands',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/hackhands.svg'
	},
	{
		text: 'Hackster',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/hackster.svg'
	},
	{
		text: 'Hashnode',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/hashnode.svg'
	},
	{
		text: 'Haskell',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/haskell.svg'
	},
	{
		text: 'Hatena Bookmark',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/hatenabookmark.svg'
	},
	{
		text: 'HERE',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/here.svg'
	},
	{
		text: 'Heroku',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/heroku.svg'
	},
	{
		text: 'Hexo',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/hexo.svg'
	},
	{
		text: 'Highly',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/highly.svg'
	},
	{
		text: 'HipChat',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/hipchat.svg'
	},
	{
		text: 'HockeyApp',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/hockeyapp.svg'
	},
	{
		text: 'homify',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/homify.svg'
	},
	{
		text: 'Hootsuite',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/hootsuite.svg'
	},
	{
		text: 'Houzz',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/houzz.svg'
	},
	{
		text: 'HTML5',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/html5.svg'
	},
	{
		text: 'Huawei',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/huawei.svg'
	},
	{
		text: 'HubSpot',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/hubspot.svg'
	},
	{
		text: 'Hulu',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/hulu.svg'
	},
	{
		text: 'Humble Bundle',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/humblebundle.svg'
	},
	{
		text: 'iCloud',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/icloud.svg'
	},
	{
		text: 'Ionic',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/iconjar.svg'
	},
	{
		text: 'IconJar',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/icq.svg'
	},
	{
		text: 'ICQ',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/ifixit.svg'
	},
	{
		text: 'iFixit',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/imdb.svg'
	},
	{
		text: 'IMDb',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/inkscape.svg'
	},
	{
		text: 'Inkscape',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instacart.svg'
	},
	{
		text: 'Instacart',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg'
	},
	{
		text: 'Instagram',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instapaper.svg'
	},
	{
		text: 'Instapaper',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/intel.svg'
	},
	{
		text: 'Intel',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/intercom.svg'
	},
	{
		text: 'Intercom',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/internetexplorer.svg'
	},
	{
		text: 'Internet Explorer',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/invision.svg'
	},
	{
		text: 'InVision',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/ionic.svg'
	},
	{
		text: 'Itch.io',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/itch-dot-io.svg'
	},
	{
		text: 'Jabber',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/jabber.svg'
	},
	{
		text: 'Java',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/java.svg'
	},
	{
		text: 'JavaScript',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/javascript.svg'
	},
	{
		text: 'Jekyll',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/jekyll.svg'
	},
	{
		text: 'Jenkins',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/jenkins.svg'
	},
	{
		text: 'Jest',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/jest.svg'
	},
	{
		text: 'Jira',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/jira.svg'
	},
	{
		text: 'Joomla',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/joomla.svg'
	},
	{
		text: 'jQuery',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/jquery.svg'
	},
	{
		text: 'jsDelivr',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/jsdelivr.svg'
	},
	{
		text: 'JSFiddle',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/jsfiddle.svg'
	},
	{
		text: 'JSON',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/json.svg'
	},
	{
		text: 'Jupyter',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/jupyter.svg'
	},
	{
		text: 'JustGiving',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/justgiving.svg'
	},
	{
		text: 'Kaggle',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/kaggle.svg'
	},
	{
		text: 'KaiOS',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/kaios.svg'
	},
	{
		text: 'Kentico',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/kentico.svg'
	},
	{
		text: 'Keybase',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/keybase.svg'
	},
	{
		text: 'KeyCDN',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/keycdn.svg'
	},
	{
		text: 'Khan Academy',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/khanacademy.svg'
	},
	{
		text: 'Kibana',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/kibana.svg'
	},
	{
		text: 'Kickstarter',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/kickstarter.svg'
	},
	{
		text: 'Kik',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/kik.svg'
	},
	{
		text: 'Kirby',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/kirby.svg'
	},
	{
		text: 'Klout',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/klout.svg'
	},
	{
		text: 'Known',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/known.svg'
	},
	{
		text: 'Koding',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/ko-fi.svg'
	},
	{
		text: 'Kotlin',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/koding.svg'
	},
	{
		text: 'Ko-fi',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/kotlin.svg'
	},
	{
		text: 'Lanyrd',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/lanyrd.svg'
	},
	{
		text: 'Laravel',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/laravel.svg'
	},
	{
		text: 'Last.fm',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/last-dot-fm.svg'
	},
	{
		text: 'Launchpad',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/launchpad.svg'
	},
	{
		text: 'LeetCode',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/leetcode.svg'
	},
	{
		text: 'Let’s Encrypt',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/letsencrypt.svg'
	},
	{
		text: 'Letterboxd',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/letterboxd.svg'
	},
	{
		text: 'LGTM',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/lgtm.svg'
	},
	{
		text: 'LibraryThing',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/liberapay.svg'
	},
	{
		text: 'Liberapay',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/librarything.svg'
	},
	{
		text: 'Line',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/line.svg'
	},
	{
		text: 'LINE WEBTOON',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linewebtoon.svg'
	},
	{
		text: 'LinkedIn',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg'
	},
	{
		text: 'Linux',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linux.svg'
	},
	{
		text: 'Linux Foundation',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linuxfoundation.svg'
	},
	{
		text: 'LiveJournal',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/livejournal.svg'
	},
	{
		text: 'Livestream',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/livestream.svg'
	},
	{
		text: 'Logstash',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/logstash.svg'
	},
	{
		text: 'Lua',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/lua.svg'
	},
	{
		text: 'Macy’s',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/macys.svg'
	},
	{
		text: 'Magento',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/magento.svg'
	},
	{
		text: 'Magisk',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/magisk.svg'
	},
	{
		text: 'MailChimp',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mail-dot-ru.svg'
	},
	{
		text: 'Mail.Ru',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mailchimp.svg'
	},
	{
		text: 'MakerBot',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/makerbot.svg'
	},
	{
		text: 'Markdown',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/markdown.svg'
	},
	{
		text: 'Marketo',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/marketo.svg'
	},
	{
		text: 'MasterCard',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mastercard.svg'
	},
	{
		text: 'Mastodon',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mastodon.svg'
	},
	{
		text: 'Material Design',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/materialdesign.svg'
	},
	{
		text: 'Mathworks',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mathworks.svg'
	},
	{
		text: 'Matrix',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/matrix.svg'
	},
	{
		text: 'Matternet',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/matternet.svg'
	},
	{
		text: 'MediaTemple',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mediatemple.svg'
	},
	{
		text: 'Medium',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/medium.svg'
	},
	{
		text: 'Meetup',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/meetup.svg'
	},
	{
		text: 'MEGA',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mega.svg'
	},
	{
		text: 'Messenger',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/messenger.svg'
	},
	{
		text: 'Meteor',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/meteor.svg'
	},
	{
		text: 'Micro.blog',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/micro-dot-blog.svg'
	},
	{
		text: 'Microgenetics',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microgenetics.svg'
	},
	{
		text: 'Microsoft',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoft.svg'
	},
	{
		text: 'Microsoft Access',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftaccess.svg'
	},
	{
		text: 'Microsoft Edge',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftedge.svg'
	},
	{
		text: 'Microsoft Excel',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftexcel.svg'
	},
	{
		text: 'Microsoft OneDrive',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftonedrive.svg'
	},
	{
		text: 'Microsoft OneNote',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftonenote.svg'
	},
	{
		text: 'Microsoft Outlook',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftoutlook.svg'
	},
	{
		text: 'Microsoft PowerPoint',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftpowerpoint.svg'
	},
	{
		text: 'Microsoft Word',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftword.svg'
	},
	{
		text: 'Minutemailer',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/minutemailer.svg'
	},
	{
		text: 'Mix',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mix.svg'
	},
	{
		text: 'Mixcloud',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mixcloud.svg'
	},
	{
		text: 'Mixer',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mixer.svg'
	},
	{
		text: 'Monero',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/monero.svg'
	},
	{
		text: 'MongoDB',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mongodb.svg'
	},
	{
		text: 'Monkey tie',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/monkeytie.svg'
	},
	{
		text: 'Monogram',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/monogram.svg'
	},
	{
		text: 'Monzo',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/monzo.svg'
	},
	{
		text: 'Moo',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/moo.svg'
	},
	{
		text: 'Mozilla',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mozilla.svg'
	},
	{
		text: 'Mozilla Firefox',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mozillafirefox.svg'
	},
	{
		text: 'Myspace',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/myspace.svg'
	},
	{
		text: 'MySQL',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mysql.svg'
	},
	{
		text: 'NativeScript',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nativescript.svg'
	},
	{
		text: 'Neo4j',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/neo4j.svg'
	},
	{
		text: 'Netflix',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/netflix.svg'
	},
	{
		text: 'Netlify',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/netlify.svg'
	},
	{
		text: 'Nextcloud',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nextcloud.svg'
	},
	{
		text: 'Nextdoor',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nextdoor.svg'
	},
	{
		text: 'NGINX',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nginx.svg'
	},
	{
		text: 'Nintendo',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nintendo.svg'
	},
	{
		text: 'Nintendo GameCube',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nintendogamecube.svg'
	},
	{
		text: 'Nintendo Switch',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nintendoswitch.svg'
	},
	{
		text: 'Node.js',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/node-dot-js.svg'
	},
	{
		text: 'Nodemon',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nodemon.svg'
	},
	{
		text: 'NPM',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/npm.svg'
	},
	{
		text: 'Nucleo',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nucleo.svg'
	},
	{
		text: 'NuGet',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nuget.svg'
	},
	{
		text: 'Nuxt.js',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nuxt-dot-js.svg'
	},
	{
		text: 'NVIDIA',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nvidia.svg'
	},
	{
		text: 'Oculus',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/oculus.svg'
	},
	{
		text: 'Odnoklassniki',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/odnoklassniki.svg'
	},
	{
		text: 'OpenStreetMap',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openstreetmap.svg'
	},
	{
		text: 'Opera',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/opera.svg'
	},
	{
		text: 'Origin',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/origin.svg'
	},
	{
		text: 'Overcast',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/overcast.svg'
	},
	{
		text: 'OVH',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/ovh.svg'
	},
	{
		text: 'Pagekit',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/pagekit.svg'
	},
	{
		text: 'Pandora',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/pandora.svg'
	},
	{
		text: 'Patreon',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/patreon.svg'
	},
	{
		text: 'PayPal',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/paypal.svg'
	},
	{
		text: 'Periscope',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/periscope.svg'
	},
	{
		text: 'PHP',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/php.svg'
	},
	{
		text: 'Picarto.TV',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/picarto-dot-tv.svg'
	},
	{
		text: 'Pinboard',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/pinboard.svg'
	},
	{
		text: 'Pingdom',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/pingdom.svg'
	},
	{
		text: 'Pingup',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/pingup.svg'
	},
	{
		text: 'Pinterest',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/pinterest.svg'
	},
	{
		text: 'Pivotal Tracker',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/pivotaltracker.svg'
	},
	{
		text: 'PlanGrid',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/plangrid.svg'
	},
	{
		text: 'Player.me',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/player-dot-me.svg'
	},
	{
		text: 'PlayStation',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/playstation.svg'
	},
	{
		text: 'PlayStation 3',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/playstation3.svg'
	},
	{
		text: 'PlayStation 4',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/playstation4.svg'
	},
	{
		text: 'Plex',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/plex.svg'
	},
	{
		text: 'Pluralsight',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/pluralsight.svg'
	},
	{
		text: 'Plurk',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/plurk.svg'
	},
	{
		text: 'Pocket',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/pocket.svg'
	},
	{
		text: 'Podcasts',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/podcasts.svg'
	},
	{
		text: 'PostgreSQL',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/postgresql.svg'
	},
	{
		text: 'Postman',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/postman.svg'
	},
	{
		text: 'PowerShell',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/powershell.svg'
	},
	{
		text: 'Prismic',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/prismic.svg'
	},
	{
		text: 'Probot',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/probot.svg'
	},
	{
		text: 'ProcessWire',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/processwire.svg'
	},
	{
		text: 'Product Hunt',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/producthunt.svg'
	},
	{
		text: 'Proto.io',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/proto-dot-io.svg'
	},
	{
		text: 'ProtonMail',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/protonmail.svg'
	},
	{
		text: 'Python',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/python.svg'
	},
	{
		text: 'Qiita',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/qiita.svg'
	},
	{
		text: 'Qualcomm',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/qualcomm.svg'
	},
	{
		text: 'Quantopian',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/quantcast.svg'
	},
	{
		text: 'Quantcast',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/quantopian.svg'
	},
	{
		text: 'Quora',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/quora.svg'
	},
	{
		text: 'Qwiklabs',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/qwiklabs.svg'
	},
	{
		text: 'Qzone',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/qzone.svg'
	},
	{
		text: 'R',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/r.svg'
	},
	{
		text: 'Rails',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/rails.svg'
	},
	{
		text: 'Raspberry Pi',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/raspberrypi.svg'
	},
	{
		text: 'React',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg'
	},
	{
		text: 'Read the Docs',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/readthedocs.svg'
	},
	{
		text: 'Reason',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/reason.svg'
	},
	{
		text: 'Redbubble',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/redbubble.svg'
	},
	{
		text: 'Reddit',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/reddit.svg'
	},
	{
		text: 'Redis',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/redis.svg'
	},
	{
		text: 'Redux',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/redux.svg'
	},
	{
		text: 'Renren',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/renren.svg'
	},
	{
		text: 'ReverbNation',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/reverbnation.svg'
	},
	{
		text: 'Riot',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/riot.svg'
	},
	{
		text: 'Riseup',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/riseup.svg'
	},
	{
		text: 'rollup.js',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/rollup-dot-js.svg'
	},
	{
		text: 'Roots',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/roots.svg'
	},
	{
		text: 'RSS',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/rss.svg'
	},
	{
		text: 'Ruby',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/ruby.svg'
	},
	{
		text: 'RubyGems',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/rubygems.svg'
	},
	{
		text: 'Runkeeper',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/runkeeper.svg'
	},
	{
		text: 'Rust',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/rust.svg'
	},
	{
		text: 'Safari',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/safari.svg'
	},
	{
		text: 'Salesforce',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/salesforce.svg'
	},
	{
		text: 'Samsung',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/samsung.svg'
	},
	{
		text: 'Samsung Pay',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/samsungpay.svg'
	},
	{
		text: 'SAP',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sap.svg'
	},
	{
		text: 'Sass',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sass.svg'
	},
	{
		text: 'Sauce Labs',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/saucelabs.svg'
	},
	{
		text: 'Scala',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/scala.svg'
	},
	{
		text: 'Scribd',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/scribd.svg'
	},
	{
		text: 'Scrutinizer CI',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/scrutinizerci.svg'
	},
	{
		text: 'Sega',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sega.svg'
	},
	{
		text: 'Sellfy',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sellfy.svg'
	},
	{
		text: 'Sensu',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sensu.svg'
	},
	{
		text: 'Sentry',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sentry.svg'
	},
	{
		text: 'Server Fault',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/serverfault.svg'
	},
	{
		text: 'Shazam',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/shazam.svg'
	},
	{
		text: 'Shopify',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/shopify.svg'
	},
	{
		text: 'Signal',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/signal.svg'
	},
	{
		text: 'Simple Icons',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/simpleicons.svg'
	},
	{
		text: 'Sina Weibo',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sinaweibo.svg'
	},
	{
		text: 'SitePoint',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sitepoint.svg'
	},
	{
		text: 'Skyliner',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/skyliner.svg'
	},
	{
		text: 'Skype',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/skype.svg'
	},
	{
		text: 'Slack',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/slack.svg'
	},
	{
		text: 'Slashdot',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/slashdot.svg'
	},
	{
		text: 'SlickPic',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/slickpic.svg'
	},
	{
		text: 'Slides',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/slides.svg'
	},
	{
		text: 'Smashing Magazine',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/smashingmagazine.svg'
	},
	{
		text: 'Snapchat',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/snapchat.svg'
	},
	{
		text: 'Snapcraft',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/snapcraft.svg'
	},
	{
		text: 'Snyk',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/snyk.svg'
	},
	{
		text: 'Society6',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/society6.svg'
	},
	{
		text: 'Sogou',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sogou.svg'
	},
	{
		text: 'Songkick',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/songkick.svg'
	},
	{
		text: 'SoundCloud',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/soundcloud.svg'
	},
	{
		text: 'SourceForge',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sourceforge.svg'
	},
	{
		text: 'Sourcegraph',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sourcegraph.svg'
	},
	{
		text: 'Spacemacs',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/spacemacs.svg'
	},
	{
		text: 'SparkFun',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sparkfun.svg'
	},
	{
		text: 'SparkPost',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sparkpost.svg'
	},
	{
		text: 'SPDX',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/spdx.svg'
	},
	{
		text: 'Speaker Deck',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/speakerdeck.svg'
	},
	{
		text: 'Spotify',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/spotify.svg'
	},
	{
		text: 'Spotlight',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/spotlight.svg'
	},
	{
		text: 'Spreaker',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/spreaker.svg'
	},
	{
		text: 'Sprint',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sprint.svg'
	},
	{
		text: 'Squarespace',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/squarespace.svg'
	},
	{
		text: 'Stack Exchange',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/stackexchange.svg'
	},
	{
		text: 'Stack Overflow',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/stackoverflow.svg'
	},
	{
		text: 'StackShare',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/stackshare.svg'
	},
	{
		text: 'Stadia',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/stadia.svg'
	},
	{
		text: 'Statamic',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/statamic.svg'
	},
	{
		text: 'Staticman',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/staticman.svg'
	},
	{
		text: 'Steam',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/steam.svg'
	},
	{
		text: 'Steem',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/steem.svg'
	},
	{
		text: 'Steemit',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/steemit.svg'
	},
	{
		text: 'Stitcher',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/stitcher.svg'
	},
	{
		text: 'Storify',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/storify.svg'
	},
	{
		text: 'Strava',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/strava.svg'
	},
	{
		text: 'Stripe',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/stripe.svg'
	},
	{
		text: 'StubHub',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/stubhub.svg'
	},
	{
		text: 'StyleShare',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/styleshare.svg'
	},
	{
		text: 'Stylus',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/stylus.svg'
	},
	{
		text: 'Sublime Text',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sublimetext.svg'
	},
	{
		text: 'Subversion',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/subversion.svg'
	},
	{
		text: 'Super User',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/superuser.svg'
	},
	{
		text: 'Swarm',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/swarm.svg'
	},
	{
		text: 'Swift',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/swift.svg'
	},
	{
		text: 'Symfony',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/symfony.svg'
	},
	{
		text: 'Tails',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/t-mobile.svg'
	},
	{
		text: 'Tapas',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tails.svg'
	},
	{
		text: 'TED',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tapas.svg'
	},
	{
		text: 'Teespring',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/ted.svg'
	},
	{
		text: 'Telegram',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/teespring.svg'
	},
	{
		text: 'Tencent QQ',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/telegram.svg'
	},
	{
		text: 'Tencent Weibo',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tencentqq.svg'
	},
	{
		text: 'Tesla',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tencentweibo.svg'
	},
	{
		text: 'The Mighty',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tesla.svg'
	},
	{
		text: 'The Movie Database',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/themighty.svg'
	},
	{
		text: 'Tidal',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/themoviedatabase.svg'
	},
	{
		text: 'Tinder',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tidal.svg'
	},
	{
		text: 'T-Mobile',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tinder.svg'
	},
	{
		text: 'Toggl',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/toggl.svg'
	},
	{
		text: 'Topcoder',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/topcoder.svg'
	},
	{
		text: 'Toptal',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/toptal.svg'
	},
	{
		text: 'Tor',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tor.svg'
	},
	{
		text: 'TrainerRoad',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/trainerroad.svg'
	},
	{
		text: 'Trakt',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/trakt.svg'
	},
	{
		text: 'Travis CI',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/travisci.svg'
	},
	{
		text: 'Treehouse',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/treehouse.svg'
	},
	{
		text: 'Trello',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/trello.svg'
	},
	{
		text: 'TripAdvisor',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tripadvisor.svg'
	},
	{
		text: 'Trulia',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/trulia.svg'
	},
	{
		text: 'Tumblr',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tumblr.svg'
	},
	{
		text: 'Twilio',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/twilio.svg'
	},
	{
		text: 'Twitch',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/twitch.svg'
	},
	{
		text: 'Twitter',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/twitter.svg'
	},
	{
		text: 'Twoo',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/twoo.svg'
	},
	{
		text: 'TypeScript',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/typescript.svg'
	},
	{
		text: 'TYPO3',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/typo3.svg'
	},
	{
		text: 'Uber',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/uber.svg'
	},
	{
		text: 'Ubisoft',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/ubisoft.svg'
	},
	{
		text: 'Ubuntu',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/ubuntu.svg'
	},
	{
		text: 'Udacity',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/udacity.svg'
	},
	{
		text: 'Udemy',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/udemy.svg'
	},
	{
		text: 'UIkit',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/uikit.svg'
	},
	{
		text: 'Umbraco',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/umbraco.svg'
	},
	{
		text: 'Unity',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/unity.svg'
	},
	{
		text: 'Unsplash',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/unsplash.svg'
	},
	{
		text: 'Untappd',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/untappd.svg'
	},
	{
		text: 'Upwork',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/upwork.svg'
	},
	{
		text: 'V8',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/v8.svg'
	},
	{
		text: 'Vagrant',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vagrant.svg'
	},
	{
		text: 'Venmo',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/venmo.svg'
	},
	{
		text: 'Verizon',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/verizon.svg'
	},
	{
		text: 'Viadeo',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/viadeo.svg'
	},
	{
		text: 'Viber',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/viber.svg'
	},
	{
		text: 'Vim',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vim.svg'
	},
	{
		text: 'Vimeo',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vimeo.svg'
	},
	{
		text: 'Vine',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vine.svg'
	},
	{
		text: 'Virb',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/virb.svg'
	},
	{
		text: 'Visa',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/visa.svg'
	},
	{
		text: 'Visual Studio Code',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/visualstudiocode.svg'
	},
	{
		text: 'VK',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vk.svg'
	},
	{
		text: 'VLC media player',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vlcmediaplayer.svg'
	},
	{
		text: 'VSCO',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vsco.svg'
	},
	{
		text: 'Vue.js',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vue-dot-js.svg'
	},
	{
		text: 'Wattpad',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/wattpad.svg'
	},
	{
		text: 'Weasyl',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/weasyl.svg'
	},
	{
		text: 'Webpack',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/webpack.svg'
	},
	{
		text: 'webcomponents.org',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/webcomponents-dot-org.svg'
	},
	{
		text: 'WebStorm',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/webstorm.svg'
	},
	{
		text: 'WeChat',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/wechat.svg'
	},
	{
		text: 'WhatsApp',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/whatsapp.svg'
	},
	{
		text: 'When I Work',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/wheniwork.svg'
	},
	{
		text: 'Wii',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/wii.svg'
	},
	{
		text: 'Wii U',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/wiiu.svg'
	},
	{
		text: 'Wikipedia',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/wikipedia.svg'
	},
	{
		text: 'Windows',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/windows.svg'
	},
	{
		text: 'Wire',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/wire.svg'
	},
	{
		text: 'Wix',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/wix.svg'
	},
	{
		text: 'Wolfram',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/wolfram.svg'
	},
	{
		text: 'Wolfram Language',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/wolframlanguage.svg'
	},
	{
		text: 'Wolfram Mathematica',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/wolframmathematica.svg'
	},
	{
		text: 'WordPress',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/wordpress.svg'
	},
	{
		text: 'WP Engine',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/wpengine.svg'
	},
	{
		text: 'Xbox',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/x-pack.svg'
	},
	{
		text: 'Xcode',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/xbox.svg'
	},
	{
		text: 'Xero',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/xcode.svg'
	},
	{
		text: 'Xing',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/xero.svg'
	},
	{
		text: 'X-Pack',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/xing.svg'
	},
	{
		text: 'XSplit',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/xsplit.svg'
	},
	{
		text: 'Y Combinator',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/yahoo.svg'
	},
	{
		text: 'Yahoo!',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/yammer.svg'
	},
	{
		text: 'Yammer',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/yandex.svg'
	},
	{
		text: 'Yandex',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/yarn.svg'
	},
	{
		text: 'Yarn',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/ycombinator.svg'
	},
	{
		text: 'Yelp',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/yelp.svg'
	},
	{
		text: 'YouTube',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/youtube.svg'
	},
	{
		text: 'Zapier',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zapier.svg'
	},
	{
		text: 'Zeit',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zeit.svg'
	},
	{
		text: 'Zendesk',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zendesk.svg'
	},
	{
		text: 'Zerply',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zerply.svg'
	},
	{
		text: 'Zillow',
		value: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zillow.svg'
	},
	{
		text: 'Adobe Lightroom',
		value:
			'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobelightroom.svg'
	}
];

module.exports = icons;
