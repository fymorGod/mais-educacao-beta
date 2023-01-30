import { useContext, useEffect, useState } from "react";
import { app } from "../../api/app";
import { AuthContext } from "../../context/auth";

export function ContentDisciplinas() {
  const { user } = useContext(AuthContext);

  const [series, setSeries] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await app.get(
        `/escolas/users/professores/${user}/series`
      );

      setSeries(response.data.series);
    };
    getData();
  }, [user]);

  return (
    <div>
      <div className="w-full">
        <div className="w-[60rem] flex flex-col bg-white rounded-lg shadow-md shaow-[#333] ml-12">
          <div className="w-full bg-dark-purple rounded-t-lg py-5 px-5">
            <p className="text-[#FFFFFF] text-[20px] font-rubik">Disciplinas</p>
          </div>
          <div className="flex justify-between flex-col">
            {series.map((serie, index) => {
              return (
                <div key={index}>
                  <h2 className="text-[#4263EB] text-[20px] font-rubik ml-6 p-3 mb-[-20px]">
                    {serie.serie.name}
                  </h2>

                  <div>
                    <div className="grid grid-cols-3 ml-12 ">
                      {serie.disciplinas.map((Disciplina) => {
                        return (
                          <div
                            key={Disciplina.id}
                            className="flex justify-center mr-1 mt-4 items-center scale-100 ease-in duration-200 hover:scale-110"
                          >
                            <a
                              href={`/view-disciplinas/${serie.serie.id}/${Disciplina.id}`}
                            >
                              <img
                                src={Disciplina.bk_img}
                                alt={Disciplina.name}
                                className="w-64 h-36 rounded-lg"
                              />

                              <p className="flex items-center mt-[-4px] justify-center text-dark-purple text-[18px] font-rubik">
                                {Disciplina.name}
                              </p>
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
