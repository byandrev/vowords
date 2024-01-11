import Wrapper from "@/components/Wrapper";
import Quiz from "@/components/Quiz";

export default function Home() {
  return (
    <Wrapper>
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <Quiz />
      </div>
    </Wrapper>
  );
}
