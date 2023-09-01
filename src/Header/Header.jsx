import { Routes, Route, Link, Router } from "react-router-dom";
import { Main, About, Product } from "../Pages";
import styles from './styles.module.css';

export const Header = () => {
  return (
    <>
      <div>
        <header className={styles.Header}>
            <nav>
            <ul>
                <li>
                <Link to="/">Главная</Link>
                </li>
                <li>
                <Link to="/about">О нас</Link>
                </li>
                <li>
                <Link to="/product">Продукт</Link>
                </li>
            </ul>
            </nav>
        </header>

        <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/product" element={<Product/>} />
        </Routes>
      </div>
    </>
  );
}

