import React from 'react';
import './TodosLoading.css'

function TodosLoading() {
  return (
    /* <p className="altMessage">Estamos cargando, aguarda un poco...</p> */
    <div className="LoadingContainer">
      <div className="LoadingItem">
          <span className="LoadingIcon"></span>
          <div className="LoadingText">
              <div className="LoadingBar"></div>
              <div className="LoadingBar LoadingBarShort"></div>
          </div>
      </div>

      <div className="LoadingItem">
          <span className="LoadingIcon"></span>
          <div className="LoadingText">
              <div className="LoadingBar"></div>
              <div className="LoadingBar LoadingBarShort"></div>
          </div>
      </div>

      <div className="LoadingItem">
          <span className="LoadingIcon"></span>
          <div className="LoadingText">
              <div className="LoadingBar"></div>
              <div className="LoadingBar LoadingBarShort"></div>
          </div>
      </div>

      <div className="LoadingItem">
          <span className="LoadingIcon"></span>
          <div className="LoadingText">
              <div className="LoadingBar"></div>
              <div className="LoadingBar LoadingBarShort"></div>
          </div>
      </div>
    </div>
  )
};

export { TodosLoading };
