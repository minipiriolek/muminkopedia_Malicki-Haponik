
### 👥 Character (Mieszkaniec)

| Pole | Typ Danych | Wymagane | Opis / Walidacja |
| :--- | :--- | :---: | :--- |
| `name` | `String` | Tak | Unikalne imię (np. "Włóczykij"). |
| `description` | `String` | Tak | Biografia lub krótka notatka Paszczaka. |
| `species` | `String` | Tak | Enum: `['Muminek', 'Paszczak', 'Miukk', 'Ryjek', 'Inny']`. |
| `isHibernating` | `Boolean` | Tak | Domyślnie: `false`. Czy postać śpi zimą? |
| `bestFriend` | `ObjectId` | Nie | Referencja `ref: 'Character'` (ID innej postaci). |

### 🏺 Artifact (Artefakt)
| Pole | Typ Danych | Wymagane | Opis / Walidacja |
| :--- | :--- | :---: | :--- |
| `name` | `String` | Tak | Nazwa (np. "Harmonijka"). |
| `properties` | `String` | Tak | Opis działania (np. "Gra tęskne melodie"). |
| `owner` | `ObjectId` | Tak | Referencja `ref: 'Character'` (ID właściciela). |

## 🔗 2. Plan Relacji (Logika Biznesowa)

1.  **Relacja Własności:** Artefakt musi mieć właściciela. W bazie danych przechowujemy tylko `_id` postaci (`ObjectId`).
2.  **Strategia Usuwania:** Jeśli postać zostanie usunięta z rejestru:
    * Artefakty tej postaci **nie są usuwane**.
    * Pole `owner` w powiązanych artefaktach zostaje ustawione na `null`.
    * *Uzasadnienie:* Przedmioty zostają w Dolinie, nawet gdy postać wyjedzie.
3.  **Łączenie danych (Populate):** Podczas pobierania danych o artefakcie, API powinno automatycznie "dołączyć" dane właściciela za pomocą metody `.populate('owner')`.

## 🚀 3. Planowane Endpointy (REST API)

| Metoda | Ścieżka | Opis |
| :--- | :--- | :--- |
| **GET** | `/api/characters` | Lista wszystkich mieszkańców. |
| **POST** | `/api/characters` | Dodanie nowej postaci do bazy. |
| **GET** | `/api/characters/:id` | Szczegółowe dane postaci + lista jej artefaktów. |
| **DELETE** | `/api/characters/:id` | Usunięcie postaci (wyjazd z Doliny). |
| **GET** | `/api/artifacts` | Katalog wszystkich przedmiotów. |
| **POST** | `/api/artifacts` | Rejestracja przedmiotu (wymaga ID właściciela). |

