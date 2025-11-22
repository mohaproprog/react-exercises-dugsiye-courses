import { AppProvider } from "./AppContext";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

export default function ContactApp() {
  return (
    <AppProvider>
      <div>
        <h1>Contact Manager</h1>
        <ContactForm />
        <ContactList />
      </div>
    </AppProvider>
  );
}
