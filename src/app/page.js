import { Header } from "../../components/Header";
import { Task } from "../../components/Task";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header></Header>

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}

        {/* task */}
        <Task title="Read a book"></Task>
        <Task title="Take a shower"></Task>
        <Task title="Sleep"></Task>
        {/* task */}

        {/* task */}
      </div>

      {/* //footer section */}
      <div>
        <Footer
          year="2023"
          fullName="Watunyoo Phanapaisarnsakul"
          studentId="650610804"
        ></Footer>
      </div>
    </div>
  );
}
