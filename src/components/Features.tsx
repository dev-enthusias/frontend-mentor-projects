import TabDetails from './TabDetails';

const Features = () => {
  return (
    <section>
      <h2>Features</h2>
      <p>
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>

      <div>
        <button>Simple Bookmarking</button>
        <button>Speedy Searching</button>
        <button>Easy Sharing</button>
      </div>

      <TabDetails />
    </section>
  );
};

export default Features;
