import './projects.css';
const Projects = () => {
  return (
    <div>
      <div className="hero-section">
      <div className="page-content">
        <h1>My Projects</h1>
        <div className="project">
          <h2><b>1. IOT based saline bottle foe healthcare.</b></h2>
          <p>The Healthcare sector has progressed by quantum leaps in the past few years. Hence, it is evident that this growth of the industry should be managed properly by all the hospital staff. This causes very little attention to patient monitoring level of the saline bottle and as well as close the saline tube comprising of air bubble to avoid air embolism when the bottle is about to get empty. The Healthcare sector with innovative techniques has brought easiness in day to day life. Automation of the saline system is the need of hospitals. Saline is a basic thing used in every hospital to deliver drugs to the patient to cure them. Whenever saline is fed to the patient there is always a requirement of nurse and caretaker to monitor it. Due to inattentiveness of nurses towards saline or lack of patient to nurse ratio in the hospital causing aeroembolism which may lead to heart attack, stroke or respiratory failure. This paper LED-Photodiode based system, monitors the saline bottle using Arduino Uno which performs the logical operation and connects the system to blynk or serial monitor terminal application. Blynk is an IoT platform that is with software, and other technologies to connect and exchange data with other devices and systems over the Internet. Whenever the level of the saline reaches the pre-defined critical level, then the nurses, doctors will be alerted through the message and an indicator will glow to alert the nurse station as well as clamps the saline bottle without any further delay. So, that fatal accidents through air embolism and further complication can be prevented.</p>
        </div>
        <div className="project">
          <h2><b>2. E-Voting system using Blockchain.</b></h2>
          <p>Blockchain is a distributed, digitized and consensus- based secure information storage mechanism. The present article provides an overview of using blockchain to create a secure and reliable e-voting system. The primary purpose of this review is to study the up-to-date state of blockchain-based voting research along with associated possible challenges while aiming to forecast future directions. The methodology appliedin this paper is a systematic review approach. Following an introduction to the basic structure and features of the blockchainin relation to e-voting, we provide a conceptual description of the desired blockchain-based e-voting application. Symmetrical and asymmetrical cryptography improvements play a key role in developing blockchain systems. We have extracted and reviewed multiple research papers from scientific databases that have advised the adoption of the blockchain framework to voting systems. These articles indicate that blockchain-supported voting systems may provide different solutions than traditional e-voting. We classified the main prevailing issues into the five following categories: general, integrity, coin based, privacy and consensus. As a result of this research, it was determined that blockchain systems can provide solutions to certain problems that prevail in current election systems. Using this application we try to architect a system that maintains the core and most important principles related to a voting system like transparency, confidentiality, security, decentralization and also provides an added advantage of mobility.</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
