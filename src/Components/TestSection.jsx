import "../OfferGrid.css"; // Save the CSS you provided as `OfferGrid.css` in the same directory.

const offers = [
  {
    id: 1,
    imgSrc: "https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/icon-64-1.svg",
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
  },
  {
    id: 2,
    imgSrc: "https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/icon-64-2.svg",
    title: "Donec quam",
    text: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
  },
  {
    id: 3,
    imgSrc: "https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/icon-64-3.svg",
    title: "Donec pede",
    text: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
  },
  {
    id: 4,
    imgSrc: "https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/icon-64-4.svg",
    title: "Cras dapibus",
    text: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor.",
  },
  {
    id: 5,
    imgSrc: "https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/icon-64-5.svg",
    title: "Aliquam lorem",
    text: "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius.",
  },
  {
    id: 6,
    imgSrc: "https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/icon-64-6.svg",
    title: "Phasellus",
    text: "Dapibus viverra",
  },
];

const TestSection = () => {
  return (
    <div className="ag-offer-block">
      <div className="ag-format-container">
        <ul className="ag-offer_list">
          {offers.map((offer) => (
            <li key={offer.id} className="ag-offer_item">
              <div className="ag-offer_visible-item">
                <div className="ag-offer_img-box">
                  <img src={offer.imgSrc} className="ag-offer_img" alt={offer.title} />
                </div>
                <div className="ag-offer_title">{offer.title}</div>
              </div>
              <div className="ag-offer_hidden-item">
                {offer.text ? (
                  <p className="ag-offer_text">{offer.text}</p>
                ) : (
                  <a href="#" className="ag-offer_btn">
                    {offer.title}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TestSection;
