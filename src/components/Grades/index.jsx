import { Button, Col, Image } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import teacherIcon from "../../assets/images/teachers.png";
import studentIcon from "../../assets/images/students.png";
import { useEffect, useState } from "react";
const Gredes = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track active index
  const [sectionIndex1, setSectionIndex] = useState(0); // State to track active index
  const [filteredSections, setFilteredSections] = useState([]); // State to store filtered sections

  const handleClick = (index) => {
    setActiveIndex(index); // Update active index on click
    setSectionIndex(0);
  };
  const handleSectionClick = (index) => {
    setSectionIndex(index); // Update active index on click
  };

  const gradeItems = [
    { Grade: "G1", value: "Grade 1" },
    { Grade: "G2", value: "Grade 2" },
    { Grade: "G3", value: "Grade 3" },
    { Grade: "G4", value: "Grade 4" },
  ];

  const section = [
    {
      key: "G1",
      class: "Grade 2",
      value: ["Section A", "Section B", "Section C"],
      claseRoomedata: {
        Teacher1: "Sethu",
        Teacher2: "Ram",
      },
    },
    {
      key: "G2",
      class: "Grade 3",
      value: ["Section D", "Section E", "Section F"],
      claseRoomedata: {
        Teacher1: "vasan",
        Teacher2: "Seeni",
      },
    },
    {
      key: "G3",
      class: "Grade 3",
      value: ["Section G", "Section H", "Section I"],
      claseRoomedata: {
        Teacher1: "mani",
        Teacher2: "pandi",
      },
    },
    {
      key: "G4",
      class: "Grade 4",
      value: ["Section J", "Section K", "Section L"],
      claseRoomedata: {
        Teacher1: "jeba",
        Teacher2: "singh",
      },
    },
  ];

  useEffect(() => {
    // Filter the sections whenever activeIndex changes
    const filtered = section.filter(
      (item) => item.key === gradeItems[activeIndex].Grade
    );
    console.log(filtered);
    setFilteredSections(filtered); // Update the filtered sections state
  }, [activeIndex]); // Dependency array includes activeIndex

  return (
    <>
      <Col className={`d-flex flex-column gap-4 `} lg={12} xl={6}>
        <Col className={`bg-white d-flex border rounded-18 shadow`}>
          <Col
            className={`d-flex flex-column flex-lg-row align-items-center justify-content-center gap-2 gap-lg-4 p-3`}
          >
            <Image
              src={studentIcon}
              width={`80px`}
              height={`80px`}
              alt={`students`}
            ></Image>
            <div
              className={`d-flex flex-column align-items-center justify-content-center`}
            >
              <p className={`fs-6 m-0`} style={{ color: "#A098AE" }}>
                Students
              </p>
              <h6 className={`fs-1 m-0 fw-bold`} style={{ color: "#303972" }}>
                132
              </h6>
            </div>
          </Col>
          <Col
            className={`d-flex flex-column flex-lg-row align-items-center justify-content-center gap-2 gap-lg-4 p-3`}
          >
            <Image
              src={teacherIcon}
              width={`80px`}
              height={`80px`}
              alt={`students`}
            ></Image>
            <div
              className={`d-flex flex-column align-items-center justify-content-center`}
            >
              <p className={`fs-6 m-0`} style={{ color: "#A098AE" }}>
                Teacher
              </p>
              <h6 className={`fs-1 m-0 fw-bold`} style={{ color: "#303972" }}>
                40
              </h6>
            </div>
          </Col>
        </Col>
        <Col className={`bg-white border rounded-18 shadow p-3`}>
          <div className={`d-flex gap-2`} style={{ height: "200px" }}>
            <div className={`w-50 overflow-auto custom_scrollbar `}>
              {gradeItems.map((value, index) => (
                <h5
                  key={index}
                  className={`border-bottom text-center p-1 cursor-pointer  ${
                    activeIndex === index ? "bg-secondary" : ""
                  }`}
                  style={{
                    color: "#303972",
                    fontFamily: "poppins-bold",
                  }}
                  onClick={() => handleClick(index)} // Handle click event
                >
                  {value.value}
                </h5>
              ))}
            </div>
            <div className="vr"></div>
            <div className={`w-50 overflow-auto custom_scrollbar`}>
              {filteredSections.map((item, index) => {
                return (
                  <div key={index}>
                    {item.value.map((sectionValue, sectionIndex) => (
                      <h6
                        key={sectionIndex}
                        className={`border-bottom text-center p-1 cursor-pointer ${
                          sectionIndex1 === sectionIndex ? "bg-secondary" : ""
                        }`}
                        style={{
                          color: "#303972",
                          fontFamily: "poppins-bold",
                        }}
                        onClick={() => handleSectionClick(sectionIndex)} // Handle click event
                      >
                        {sectionValue} {/* Display each section value */}
                      </h6>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>

          <div
            style={{ height: "160px" }}
            className={`d-flex border rounded-18 shadow mt-4  `}
          >
            <div
              className={`w-50 d-flex  flex-column align-items-center justify-content-center gap-4`}
            >
              <div className={`d-flex   gap-0  gap-md-4 `}>
                <div className={``}>
                  <h4
                    style={{ fontFamily: "poppings-bold" }}
                    className={`m-0 fs-4 text-purple-100`}
                  >
                    {"Ram"}
                  </h4>
                  <p
                    className={`m-0`}
                    style={{
                      fontSize: "12px",
                      color: "#444C82",
                      fontFamily: "poppings-bold",
                    }}
                  >
                    Primary Teacher
                  </p>
                </div>
                <FaRegEdit className={`fs-5 text-purple-100`} />
              </div>
              <div className={`d-flex  gap-0  gap-md-4 `}>
                <div className={``}>
                  <h4
                    style={{ fontFamily: "poppings-bold" }}
                    className={`m-0 fs-4 text-purple-100`}
                  >
                    {"Sethu"}
                  </h4>
                  <p
                    className={`m-0`}
                    style={{
                      fontSize: "12px",
                      color: "#444C82",
                      fontFamily: "poppings-bold",
                    }}
                  >
                    Primary Teacher
                  </p>
                </div>
                <FaRegEdit className={`fs-5 text-purple-100`} />
              </div>
            </div>
            <div
              className={`w-50 d-flex  flex-column align-items-center justify-content-center`}
            >
              <h2 className={`fs-3`} style={{ fontFamily: "poppings-bold" }}>
                PREK
              </h2>
              <h2>Section B</h2>
              <Button className={`border-0 bg-purple-100`}>
                View Students
              </Button>
            </div>
          </div>
        </Col>
      </Col>
    </>
  );
};

export default Gredes;
