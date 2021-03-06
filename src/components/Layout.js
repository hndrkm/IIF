import Header  from "./TopMenu/Header";
import Footer from "./BotMenu/Footer";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-1">
        {props.children}
      </main>
      <Footer/>
    </div>
  );
}