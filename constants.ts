import { Project } from './types';

export const NAME = "ADJEI RAPHAEL NII ADJETEY";
export const HEADLINE = "Mechanical Engineering Student | Innovator & Problem Solver";
export const PROFILE_SUMMARY = "I am a third-year Mechanical Engineering student at Kwame Nkrumah University of Science and Technology (KNUST) with a strong foundation in engineering design and hands-on experience in mechanical component and machine design. I am proficient in industry-standard design software, including SOLIDWORKS and AutoCAD, and possess practical technical skills such as welding and fabrication. A quick learner with a problem-solving mindset, I am eager to apply my knowledge to realworld engineering challenges and continuously enhance my expertise.";
export const CONTACT_INFO = {
    email: "adjeir661@gmail.com",
    phone: "+233595261302",
    location: "Oyarifa, Ghana",
    linkedin: "http://www.linkedin.com/in/raphael-nii-adjetey-adjei-465115280"
};

export const PROJECTS_DATA: Project[] = [
    {
        title: "Waste Compactor Bin",
        role: "Team Leader",
        description: [
            "Designed a waste compacting bin with SolidWorks to reduce subassembly time.",
            "Worked with the robotics team to integrate Arduino-programmed sensors, improving efficiency by 25%.",
            "Assembled bin components using gas welding, increasing productivity by 15%."
        ]
    },
    {
        title: "Coconut Grinding Machine",
        role: "Design Engineer",
        description: [
            "Designed several concepts using SolidWorks.",
            "Conducted FEA simulations using SolidWorks to ensure durability under a 140N shear force."
        ]
    },
    {
        title: "Straight Dental Drilling Handpiece",
        role: "Design Engineer",
        description: [
            "Designed the 3D model of dental handpiece with SOLIDWORKS.",
            "Collaborated with the robotics team to 3D print models of the dental handpiece.",
            "Led my team's presentation effectively communicating technical concepts and design insights."
        ]
    }
];
