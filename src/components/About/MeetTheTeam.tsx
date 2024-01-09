import { Container } from "@mui/material";

const teamMembers = [
  {
    name: "Sopuruchi Rufus",
    position: "Founder",
    image: "Sopuruchi Rufus, Founder .jpeg",
  },
  {
    name: "Joel",
    position: "Graphics Designer",
    image: "Joel, Graphics Designer.jpeg",
  },
  {
    name: "Favour Babatunde",
    position: "Community Manager",
    image: "Favour.jpeg",
  },
  {
    name: "Daniel",
    position: "Brand Identity Designer",
    image: "Daniel Brand Identity Designer.jpg",
  },
  {
    name: "Chidimma Chukwuani",
    position: "Content Creator",
    image: "Chidimma M. Chukwuani, Content Creator Volunteer.jpeg",
  },
  {
    name: "Joy",
    position: "Content Writer",
    image: "Joy, Content Writer Volunteer.jpeg",
  },
  {
    name: "Saliu Ayomiotan",
    position: "Content Writer",
    image: "Saliu Waliyat Ayomiotan, Content Writer Volunteer.jpeg",
  },
  {
    name: "Bakare Adefolakemi",
    position: "Email Marketer ",
    image: "BAKARE ADEFOLAKEMI, Email Marketer Volunteer.JPG",
  },
  // {
  //   name: "Aniefiok Michael",
  //   position: "UI/UX",
  //   image: "Aniefiok Michael, UI_UX Volunteer .jpeg",
  // },
];

const MeetTeam = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <section className="bg-white py-8 px-[1.5rem] md:p-16">
          <div className="container mx-auto">
            <h4 className="text-2xl text-[#113167] text-center mb-8 font-bold mt-4">
              Meet the Team
            </h4>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6 items-center justify-center mb-4">
              {teamMembers.map((member, index) => (
                <div className="mb-6 flex items-center lg:block" key={index}>
                  <div className=" overflow-hidden rounded-lg h-[6rem] !w-[6rem] flex-shrink-0 lg:w-60 lg:h-60">
                    <img
                      src={`/assets/members/${member.image}`}
                      alt={`Team member : ${member.name}`}
                      className=" rounded-lg object-center object-fill"
                    />
                  </div>
                  <div className="w-full p-2">
                    <h6 className="text-sm md:text-lg  mt-2">
                      {member.position}
                    </h6>
                    <p className="font-bold text-lg md:text-lg mt-0.5">
                      {member.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div id="team"></div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default MeetTeam;
