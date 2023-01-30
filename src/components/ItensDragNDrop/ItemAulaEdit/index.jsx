import { Draggable } from "react-beautiful-dnd";

export function ItemAulaEdit({ data, index }) {
  return (
    <Draggable index={index} draggableId={data.id.toString()}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="flex flex-col justify-center items-center mb-14 mt-4 w-[200px] h-[100px]"
        >
          <a className="flex flex-col items-center active:opacity-50">
            <img src={data.thumb} className="rounded-t-lg" />
            <div className="bg-[#EDF2FF] w-full h-[40px] rounded-b-lg">
              <p className="text-[14px] text-dark-purple leading-4 px-3 py-1">
                {data.title}
              </p>
            </div>
          </a>
        </div>
      )}
    </Draggable>
  );
}
