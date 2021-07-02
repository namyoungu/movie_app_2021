import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <>
      <section className="lorem__box">
        <h1 className="lorem__titme">Lorem Ipsum</h1>
        <p className="lorem__sub">
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        </p>
        <p>
          "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
        </p>
        <hr></hr>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae risus dui. Sed dignissim eu felis tempor feugiat. Duis dignissim suscipit leo, vitae hendrerit dolor iaculis non. Nullam tempus pharetra magna a tempor. In rutrum pretium sem, quis feugiat ante bibendum ut. Fusce et tortor sed risus egestas maximus ac non turpis. In eget dapibus risus. Nulla sollicitudin varius nisl, id sollicitudin enim pulvinar ac. Suspendisse eu ultricies mauris, at vulputate nisl. Quisque semper eget orci laoreet bibendum. Quisque risus nulla, imperdiet nec ultricies ut, molestie non velit. Proin porttitor justo vitae dapibus dignissim.
        </p>
        <p>
          Quisque in ex ac lorem pretium tempus a in dolor. Suspendisse potenti. Integer pharetra eleifend augue id aliquet. Etiam condimentum fermentum pulvinar. Vivamus sed ultrices est. Cras accumsan venenatis lectus, et tincidunt nunc mattis sed. Nam turpis justo, pharetra sed bibendum quis, lobortis eu sem. Nulla bibendum dui ac tellus congue, id ullamcorper ipsum tristique. Sed nec hendrerit nibh. Proin lobortis, augue nec condimentum lobortis, lorem urna sollicitudin magna, sed cursus magna magna id nisl. Cras tincidunt suscipit lectus, suscipit placerat ipsum aliquet sodales. Sed leo nunc, pellentesque a suscipit a, pellentesque eu quam. Sed purus libero, consequat vel elementum sit amet, molestie ut ligula. Donec sed pulvinar arcu.
        </p>
      </section>
    </>
  );
}

export default About;