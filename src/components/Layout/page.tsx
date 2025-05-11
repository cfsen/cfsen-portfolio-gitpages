import type { navigationProps } from '../../types/navigationProps';

function Page({ activePage, handleActive }: navigationProps) {
  const navigationElements = [
    { label: "Projects", id: 0 },
    { label: "Contact", id: 1 }
  ];

  // TODO parse markdown from public/markdown

  return (
    <>
      <div id="pageContainer">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin dolor sit amet molestie maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce ac ipsum neque. Donec quis felis eu ex vestibulum pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis aliquam condimentum dui, at maximus tortor laoreet quis. Sed eu mi nec lacus imperdiet tristique. Vivamus tristique urna enim, sit amet gravida massa dictum et. Aenean mauris ex, laoreet eget turpis malesuada, dapibus rhoncus elit.
        </p>
        <p>
          Fusce et tincidunt tortor, sit amet luctus leo. Sed eget congue mi. Duis fringilla, nulla at porta dapibus, felis massa vestibulum lorem, facilisis convallis lectus ipsum sed leo. In quis massa metus. Phasellus sed diam venenatis, malesuada neque id, faucibus dui. Nullam gravida mi id nisi iaculis, eget fringilla nibh placerat. Sed vel erat auctor, consectetur eros sed, pharetra leo. Ut placerat felis ornare nisi lobortis, sodales elementum eros elementum. Nulla facilisi. Vivamus a odio velit. Proin dignissim arcu vel iaculis volutpat. Curabitur fermentum facilisis velit id fermentum. Phasellus mattis interdum odio scelerisque viverra. Aenean non venenatis neque, et luctus nibh. Duis sodales ullamcorper eros, eu convallis purus aliquet in. Aenean quis sapien rhoncus, finibus justo volutpat, auctor nisl.
        </p>
      </div>
    </>
  );
}


export default Page
