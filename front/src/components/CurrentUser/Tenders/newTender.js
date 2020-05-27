import React from "react";
import Button from "../../generalComponents/button";
import "../../../css/inputStyle.css";
export default function NewTender({ onSubmit }) {
  return (
    <>
      <h3>Создать новый аукцион:</h3>

      <div className="box-input">
        <form className="auction-form" onSubmit={onSubmit}>
          <input
            type="text"
            required={true}
            placeholder="Введите название аукциона"
            name="title"
          />

          <input
            type="text"
            required={true}
            placeholder="Введите площадку"
            name="market"
          />

          <input
            type="text"
            required={true}
            placeholder="Минимальная оплата"
            name="minCost"
          />

          <input type="text" required={true} placeholder="Шаг" name="step" />

          <input type="datetime-local" required={true} name="startDate" />

          <input type="datetime-local" required={true} name="finishDate" />
          <Button type="submit" text="Создать" />
        </form>
      </div>
      <div></div>
    </>
  );
}
