import { Link } from "react-router-dom";

function Overview() {
  return (
    <section className="p-2 relative">
      <h1 className="text-2xl font-semibold">About this place</h1>

      <div className="mt-5">
        <h2 className="text-xl mb-2">Cuisines</h2>
        <ul className="flex gap-3 text-gray-700">
          <li className="px-4 py-2 border rounded">South Indian</li>
          <li className="px-4 py-2 border rounded">Italian</li>
          <li className="px-4 py-2 border rounded">Biryani</li>
          <li className="px-4 py-2 border rounded">Chinese</li>
          <li className="px-4 py-2 border rounded">Desserts</li>
          <li className="px-4 py-2 border rounded">Beverages</li>
        </ul>
      </div>

      <div className="mt-5">
        <h2 className="text-xl mb-2">Popular Dishes</h2>
        <div className="text-gray-600 text-sm font-light">
          <p>
            Murgh Mastana, Zaffrani Kebab, Haleem, Chicken Lollipop, Kababs,
            Chicken Dum Biryani
          </p>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-xl mb-2">People Say This Place Is Known For</h2>
        <div className="text-gray-600 text-sm font-light">
          <p>
            Good for Large Groups, Employee, Gastronomical Experience, Amazing
            Taste, Nice Service, Mood
          </p>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-xl mb-2">Average Cost</h2>
        <div className="text-gray-600 text-sm font-light">
          <p>₹1400 for two people (approx.)</p>
          <p>Exclusive of applicable taxes and charges, if any</p>
        </div>
      </div>

      <div className="font-light tracking-wide mt-5">
        <p>Cash and Cards accepted</p>
        <p>Digital payments accepted</p>
      </div>
      {/* TODO: Add some photos and reviews upon clicking will take user to respective tabs */}
      <section className="absolute block top-4 right-4 border rounded-lg h-auto w-80 shadow p-4">
        <p className="text-xl font-light">Call</p>
        <p className="text-red-500 font-light text-sm mt-2 tracking-wide">
          +919154366519
        </p>
        <p className="text-xl font-light mt-6">Direction</p>
        <img
          className="w-full h-auto mt-3"
          src="https://maps.zomato.com/php/staticmap?center=17.4537844736,78.3640545979&maptype=zomato&markers=17.4537844736,78.3640545979,pin_res32&sensor=false&scale=2&zoom=16&language=en&size=240x150&size=400x240&size=650x250"
          alt="pista house map"
        />
        <p>2-91\68, Floor 6 & 7, Gachibowli, Hyderabad</p>
        {/* TODO: display a toast when user copies address */}
        <div className="flex gap-4 mt-3 text-gray-600 font-light">
          <button
            onClick={() => {
              navigator.clipboard.writeText(
                "2-91\\68, Floor 6 & 7, Gachibowli, Hyderabad"
              );
            }}
            className="px-4 py-2 border rounded-lg"
          >
            Copy
          </button>
          <Link
            className="px-4 py-2 border rounded-lg cursor-pointer"
            to="https://www.google.com/maps/dir/?api=1&destination=17.4537844736,78.3640545979"
            target="_blank"
          >
            <div className="flex gap-2 items-center justify-between">
              <i size="20" color="#EF4F5F">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#EF4F5F"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                >
                  <title>direction</title>
                  <path d="M19.2 8.44l-7.22-7.22c-0.52-0.48-1.2-0.8-1.98-0.8s-1.46 0.32-1.98 0.8v0l-7.2 7.22c-0.52 0.5-0.82 1.2-0.82 1.98s0.3 1.46 0.82 1.98l7.2 7.2c0.5 0.52 1.2 0.82 1.98 0.82s1.48-0.3 1.98-0.82l7.22-7.2c0.5-0.52 0.8-1.22 0.8-1.98s-0.3-1.48-0.8-1.98v0zM14.54 9.64l-2.34 2.32c-0.040 0.040-0.080 0.060-0.12 0.060-0.1 0-0.18-0.080-0.18-0.18 0 0 0 0 0 0v0-1.66h-3.56c-0.4 0-0.72 0.32-0.72 0.72v2.38c0 0.26-0.22 0.46-0.48 0.46v0h-0.48c-0.26 0-0.46-0.2-0.46-0.46v0-2.38c0-1.2 0.96-2.16 2.14-2.16v0h3.56v-1.66c0 0 0 0 0 0 0-0.1 0.080-0.18 0.18-0.18 0.040 0 0.080 0.020 0.12 0.060v0l2.34 2.34c0.040 0.040 0.080 0.1 0.080 0.16s-0.040 0.14-0.080 0.18v0z"></path>
                </svg>
              </i>
              Direction
            </div>
          </Link>
        </div>
      </section>
    </section>
  );
}

export default Overview;
