import { AccordianItem } from "./AccordianItem";

export const AccordianItem2 = (props: {
  isOpen: boolean;
  onClick: (e: React.MouseEvent, buttonClicked: "expand" | "collapse") => void;
}) => {
  return (
    <AccordianItem
      {...props}
      headerTag="ACCORDIAN COLLAPSED STYLE"
      headerTitle="Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur"
      content="Donec congue, massa ut tempor blandit, felis nisi cursus massa, at
      pulvinar orci nunc vel ex. Nullam id leo vitae metus vestibulum dapibus.
      In auctor tortor neque, nec efficitur nisi placerat vel. Quisque ac
      sollicitudin magna. Quisque iaculis pellentesque tortor, quis elementum
      erat euismod et. Praesent egestas neque eget nibh congue gravida.
      Suspendisse facilisis, ante et malesuada ornare, magna felis convallis
      dolor, imperdiet dictum mi augue ut ipsum. Phasellus id odio ipsum.
      Donec congue, massa ut tempor blandit, felis nisi cursus massa, at
      pulvinar orci nunc vel ex. Nullam id leo vitae metus vestibulum dapibus.
      In auctor tortor neque, nec efficitur nisi placerat vel. Quisque ac
      sollicitudin magna. Quisque iaculis pellentesque tortor, quis elementum
      erat euismod et. Praesent egestas neque eget nibh congue gravida.
      Suspendisse facilisis, ante et malesuada ornare, magna felis convallis
      dolor"
    />
  );
};
