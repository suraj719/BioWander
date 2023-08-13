import React from "react";

export default function Operators() {
  const operators = [
    {
      name: "EcoVenture Expeditions",
      about:
        "EcoVenture Expeditions specializes in eco-friendly adventure tours that promote sustainable travel and environmental education. Our experienced guides are passionate about preserving natural habitats and supporting local communities",
      suspractices:
        "Carbon-neutral tours, support for local conservation projects, waste reduction initiatives",
      activities:
        "Guided hiking, wildlife observation, cultural immersion experiences",
      destinations:
        "Rainforest treks in South America, wildlife safaris in Africa",
      cultural:
        "Collaborates with indigenous communities for cultural exchange",
      rating: "4.8/5 based on 50 reviews",
    },
    {
      name: "GreenWave Ecotours",
      about:
        "GreenWave Ecotours is dedicated to providing travelers with unique eco-friendly experiences that contribute to the preservation of natural environments and local cultures. We prioritize responsible wildlife interactions and sustainable practices.",
      suspractices:
        "Zero-waste picnics, support for marine conservation, sustainable transportation",
      activities:
        "Snorkeling with marine biologists, coastal cleanups, birdwatching.",
      destinations: "Coral reefs in the Caribbean, coastal habitats in Asia",
      cultural: "Partners with local artisans for cultural workshops.",
      rating: "4.9/5 based on 30 reviews",
    },
    {
      name: "Harmony Trails Expeditions",
      about:
        "Harmony Trails Expeditions is committed to creating harmonious interactions between travelers, nature, and local communities. Our guided eco-tours focus on promoting sustainable practices and preserving the delicate balance of ecosystems",
      suspractices:
        "Organic farm-to-table meals, habitat restoration projects, plastic-free initiatives.",
      activities:
        "Nature photography workshops, wildlife tracking, tree planting",
      destinations: "Alpine regions of Europe, rainforests of Southeast Asia",
      cultural:
        "Partners with local storytellers for cultural history sessions.",
      rating: "4.7/5 based on 25 reviews.",
    },
    {
      name: "Earthbound Adventures",
      about:
        "Earthbound Adventures offers authentic and sustainable travel experiences that embrace the beauty of nature and the importance of cultural diversity. We are committed to ensuring that every journey leaves a positive impact on the environment and communities.",
      suspractices:
        "Solar-powered camps, community-based tourism, wildlife conservation contributions",
      activities:
        "Kayaking through mangroves, community-supported agriculture tours, artisan workshops.",
      destinations:
        "Remote islands of Oceania, indigenous territories in the Americas.",
      cultural:
        "Empowers indigenous communities through cultural exchange programs.",
      rating: "4.6/5 based on 40 reviews",
    },
  ];

  const guides = [
    {
      name: "Maria, Cultaral Explorer",
      location: "Spain",
      expertise:
        "Maria specializes in leading immersive cultural journeys that delve deep into the traditions, stories, and cuisines of diverse communities.",
      activities:
        "Guided village tours, traditional craft workshops, cooking classes with local families.",
      approach:
        "Maria believes in sustainable tourism that respects local cultures and supports community well-being",
      languages: "Fluent in English and Spanish",
      image: "../images/guide4.jpeg",
    },
    {
      name: "Amina, Community Connector",
      location: "France",
      expertise:
        "Amina specializes in urban exploration, connecting travelers with the heart and soul of cities while supporting local initiatives",
      activities:
        "City walking tours, visits to community projects, cultural performances",
      approach:
        "Amina's tours focus on promoting cultural understanding, supporting local businesses, and fostering meaningful connections.",
      languages: "Fluent in English, Arabic, and French",
      image: "../images/guide2.jpeg",
    },
    {
      name: " Luca, Adventure Seeker",
      location: "Italy",
      expertise:
        "Luca is an experienced mountaineer and outdoor enthusiast who leads sustainable trekking and adventure tours",
      activities:
        "Trekking expeditions, rock climbing, camping under the stars",
      approach:
        "Luca believes in low-impact adventure that leaves no trace and fosters a deep connection with nature",
      languages: "Fluent in English and Italian",
      image: "../images/guide3.jpeg",
    },
    {
      name: "Raj, Nature Enthusiast",
      location: "India",
      expertise:
        " Raj is a naturalist and birdwatcher who leads eco-friendly expeditions focused on wildlife conservation and ecological education.",
      activities:
        " Birdwatching tours, jungle treks, nature photography workshops.",
      approach:
        " Raj's tours aim to create a sense of wonder for the natural world while promoting responsible wildlife interactions",
      languages: "Proficient in English, Hindi, and regional languages.",
      image: "../images/guide1.jpeg",
    },
    {
      name: "Javier, Marine Conservationist",
      location: "Indonesia",
      expertise:
        "Javier is a marine biologist and conservationist who leads educational underwater expeditions that emphasize ocean conservation and sustainable diving practices.",
      activities:
        " Snorkeling and scuba diving tours, coral reef restoration workshops.",
      approach:
        " Javier's tours combine adventure with education, inspiring travelers to become ocean stewards and protect fragile marine ecosystems",
      languages: "Fluent in English and Spanish.",
      image: "../images/guide5.jpeg",
    },
    {
      name: "Leila, Wilderness Storyteller",
      location: "Bali",
      expertise:
        " Leila is a nature lover and storyteller who leads immersive wilderness experiences that connect travelers with the natural world through storytelling and mindfulness.",
      activities:
        "Forest walks, nature journaling, mindfulness workshops",
      approach:
        " Leila's tours encourage travelers to slow down, connect with nature on a deeper level, and cultivate a sense of awe and appreciation",
      languages: "Fluent in English and French.",
      image: "../images/guide6.jpeg",
    },
  ];

  return (
    <>
      <div>
        <div className="d-flex flex-wrap wrap justify-content-around align-items-center">
          <p className="fs-3 text-decoration-underline">
            Responsible Tour Operators Around The World
          </p>
          <div>
            <button className="btn btn-outline-success">
              Register yoursef as an operator
            </button>
          </div>
        </div>
        <div className="mt-3 d-flex flex-wrap wrap lg-gap-0 gap-5 justify-content-evenly align-items-center">
        {guides.map((guide, index) => {
            return (
              <div
                key={index}
                className="card p-2 px-4 lg-mx-0 mx-4"
                style={{ width: "25rem" }}
              >
                <img className="rounded-circle img-fluid align-self-center" style={{width:"13rem"}} src={guide.image} alt={`guide${index}`}/>
                <p className="fs-4 fw-semibold text-center">{guide.name}</p>
                <p>
                  <span className="fw-semibold">📍Location: </span>
                  {guide.location}
                </p>
                <p>
                  <span className="fw-semibold">🚀Expertise: </span>
                  {guide.expertise}
                </p>
                <p>
                  <span className="fw-semibold">🌿Activities: </span>
                  {guide.activities}
                </p>
                <p>
                  <span className="fw-semibold">📜Approach: </span>
                  {guide.approach}
                </p>
                <p>
                  <span className="fw-semibold">🗣️Languages: </span>
                  {guide.languages}
                </p>
                <button className="btn btn-success">📞Schedule a Call</button>
              </div>
            );
          })}
          {operators.map((operator, index) => {
            return (
              <div
                key={index}
                className="card p-2 px-4 lg-mx-0 mx-4"
                style={{ width: "40rem" }}
              >
                <p className="fs-4 fw-semibold text-center">{operator.name}</p>
                <p>
                  <span className="fw-semibold">💁🏻About: </span>
                  {operator.about}
                </p>
                <p>
                  <span className="fw-semibold">📍Destinations: </span>
                  {operator.destinations}
                </p>
                <p>
                  <span className="fw-semibold">
                    🌱Sustainability Practices:{" "}
                  </span>
                  {operator.suspractices}
                </p>
                <p>
                  <span className="fw-semibold">
                    🌍Responsible Activities:{" "}
                  </span>
                  {operator.activities}
                </p>
                <p>
                  <span className="fw-semibold">🧑‍🤝‍🧑Cultural Engagement: </span>
                  {operator.cultural}
                </p>
                <p>
                  <span className="fw-semibold">⭐Rating: </span>
                  {operator.rating}
                </p>
                <button className="btn btn-success">📞Schedule a Call</button>
              </div>
            );
          })}
          
        </div>
      </div>
    </>
  );
}
