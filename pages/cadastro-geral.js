const css = `
  .cadastro-wrap {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }

  .grid-erp {
    display: grid;
    grid-template-columns: repeat(auto-fill, 242px);
    gap: 14px;
    align-items: start;
    justify-content: start;
  }

  .erp-card {
    background: rgba(236,239,241,.96);
    border: 1px solid #90A4AE;
    border-radius: 14px;
    padding: 11px;
    box-shadow: 0 8px 18px rgba(38,50,56,.10);
    width: 242px;
    height: 312px;
    display: flex;
    flex-direction: column;
  }

  .erp-card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 6px;
    border-bottom: 1px solid #B0BEC5;
    padding-bottom: 7px;
    margin-bottom: 9px;
    min-height: 38px;
  }

  .erp-card-header h2 {
    font-size: 13px;
    margin: 0;
    color: #263238;
    line-height: 1.1;
  }

  .erp-card-header span {
    display: block;
    font-size: 10px;
    color: #607D8B;
    margin-top: 2px;
  }

  .top-actions {
    display: flex;
    gap: 4px;
    flex-shrink: 0;
  }

  .top-actions button {
    border: 1px solid #90A4AE;
    background: #FFFFFF;
    color: #455A64;
    border-radius: 7px;
    padding: 3px 6px;
    font-size: 10px;
    cursor: pointer;
    font-weight: 600;
  }

  .top-actions button:last-child {
    background: #455A64;
    color: #FFFFFF;
  }

  .insert-line {
    display: grid;
    grid-template-columns: 1fr 34px;
    gap: 6px;
    margin-bottom: 8px;
    flex-shrink: 0;
  }

  .insert-line-dupla {
    display: grid;
    grid-template-columns: 1fr 58px 34px;
    gap: 5px;
    margin-bottom: 8px;
    flex-shrink: 0;
  }

  .insert-line input,
  .insert-line-dupla input {
    height: 31px;
    border-radius: 8px;
    border: 1px solid #90A4AE;
    padding: 0 8px;
    min-width: 0;
    font-size: 11.5px;
  }

  .insert-line button,
  .insert-line-dupla button {
    height: 31px;
    border: 0;
    border-radius: 8px;
    background: #607D8B;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    font-size: 16px;
    line-height: 1;
  }

  .dupla-head {
    display: grid;
    grid-template-columns: 1fr 62px;
    gap: 6px;
    background: #CFD8DC;
    color: #263238;
    border-radius: 8px;
    padding: 6px 8px;
    margin-bottom: 5px;
    font-size: 11px;
    flex-shrink: 0;
  }

  .item-list {
    flex: 1;
    overflow-y: auto;
    padding-right: 3px;
    min-height: 0;
  }

  .item-list::-webkit-scrollbar {
    width: 5px;
  }

  .item-list::-webkit-scrollbar-thumb {
    background: #90A4AE;
    border-radius: 10px;
  }

  .item-row,
  .item-row-dupla {
    border-bottom: 1px solid #CFD8DC;
    font-size: 11.4px;
    color: #263238;
    cursor: pointer;
    transition: .15s;
  }

  .item-row {
    padding: 6px 4px;
  }

  .item-row-dupla {
    display: grid;
    grid-template-columns: 1fr 62px;
    gap: 6px;
    padding: 6px 8px;
  }

  .item-row:hover,
  .item-row-dupla:hover {
    background: #DDE6EA;
    border-radius: 7px;
  }

  .selected {
    background: #607D8B !important;
    color: #FFFFFF;
    border-radius: 7px;
    padding-left: 8px;
    font-weight: 600;
  }
`;
