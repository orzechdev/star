# Star

The e-commerce platform where clients determine the product they buy.

## Differences between Star and other e-commerce platforms

Main differences:

- there is no pre-determined products
- clients submit products inquiries via any file format or via HTML inputs of any type
- it's natural extension of well-defined web tech stack such as JavaScript using modularised architecture
- clients are the most important, not producers
- there is no shop dashboard for sellers (typically existing in other platforms), if there is dashboard it belongs to clients and replaces storefronts (typically existing in other platforms)

## Brief history on products production

First people were creating unique products one by one, they did not started with ready to use production line. The automation have been introduced mainly during the Industrial Revolution period, when names like Herny Ford started production lines, to make cars more affordable to everyone. But first, he had to accuire clients for first bunch of his products, not vice versa. So in short, if you want to start selling your product, start with this platform, listen to what clients products inquiries are asking for via inqueries and later scale to millions, not vide versa.

## Examplary usage

Typical examples:

- Client submit inquiry in `.dwg` BIM (building information modeling) file format and building construction manager prepares necessairy budget estimation and all procurement proposition. Once client agree, client proceeds with payment or funding process. The website can contain dahboard for these clients as well, so they will see the whole procurement process, from initiating it by submitting inquiry, through estimation, compairing producers of materials, until the build process of given construction is completed.
- Client submit customised table creation inquiry in `.blend` Blender (3D software model) file format. Client receives proposition with price, time and shipment estimation and carpenter starts creation of table at the end delivering ready table to the client.
- Client submit customised scarf creation inquiry by selecting desired color in `HTML select input`. Client receives proposition with price, time and shipment estimation and an older but still beautiful lady knitting starts knitting the scarf at the end delivering it to the client.

## Star architecture

As for now, there are following parts of Star:

- items - they represent classes of products you, e.g. as a producer, can accept
- parts - they represent all parts that the final product can contain
- star - facilitiates procurement of items with it's parts

In more complex scenarios, items might represent accepted file formats, while parts might represent huge number of anything that is created in these formats.
