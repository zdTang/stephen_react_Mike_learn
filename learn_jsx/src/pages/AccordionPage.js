import Accordion from "../components/Accordion";
const AccordionPage = () => {
  const items = [
    {
      id: "sdsdd",
      label: "how to do it?",
      content: "hello, you all!",
    },
    {
      id: "wewsfe",
      label: "how to do it?",
      content: "hello, you people!",
    },
    {
      id: "evxne",
      label: "how to do it?",
      content: "hello, you dumb!",
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default AccordionPage;
