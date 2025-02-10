function GetStarted() {
    const items = [
      { src: "p2.webp", alt: "Vegetables Image", label: "Vegetables", link: "/veg" },
      { src: "p1.jpg", alt: "Non Veg Items Image", label: "Non Veg Items", link: "/nonveg" },
      { src: "lf.jpg", alt: "Leafy Vegetables Image", label: "Leafy Vegetables", link: "/mobile" },
      { src: "ff.jpg", alt: "Fruits Image", label: "Fruits", link: "/laptop" },
    ];
  
    return (
      <div className="container p-5 m-5">
        <div className="row g-4">
          {items.map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card shadow-sm">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="card-img-top"
                  style={{ height: "150px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <p className="card-title h5">{item.label}</p>
                  <a href={item.link} className="btn btn-primary mt-2">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default GetStarted;
  