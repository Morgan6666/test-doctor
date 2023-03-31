--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Drop databases (except postgres and template1)
--

DROP DATABASE medbase;




--
-- Drop roles
--

DROP ROLE morgan;


--
-- Roles
--

CREATE ROLE morgan;
ALTER ROLE morgan WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:1dOpvBvpMLPJZO9zU21wUw==$TJ6tF55UQ+iqdSvczmWnJN+IC+FQ0GhSSvwFbYxYD/M=:4SyaaD7/psJa3kXXBpPzpVuSu5LpzmjW1cK7cv6F2Iw=';






--
-- Databases
--

--
-- Database "template1" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Debian 14.5-1.pgdg110+1)
-- Dumped by pg_dump version 14.5 (Debian 14.5-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

UPDATE pg_catalog.pg_database SET datistemplate = false WHERE datname = 'template1';
DROP DATABASE template1;
--
-- Name: template1; Type: DATABASE; Schema: -; Owner: morgan
--

CREATE DATABASE template1 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE template1 OWNER TO morgan;

\connect template1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE template1; Type: COMMENT; Schema: -; Owner: morgan
--

COMMENT ON DATABASE template1 IS 'default template for new databases';


--
-- Name: template1; Type: DATABASE PROPERTIES; Schema: -; Owner: morgan
--

ALTER DATABASE template1 IS_TEMPLATE = true;


\connect template1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE template1; Type: ACL; Schema: -; Owner: morgan
--

REVOKE CONNECT,TEMPORARY ON DATABASE template1 FROM PUBLIC;
GRANT CONNECT ON DATABASE template1 TO PUBLIC;


--
-- PostgreSQL database dump complete
--

--
-- Database "medbase" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Debian 14.5-1.pgdg110+1)
-- Dumped by pg_dump version 14.5 (Debian 14.5-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: medbase; Type: DATABASE; Schema: -; Owner: morgan
--

CREATE DATABASE medbase WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE medbase OWNER TO morgan;

\connect medbase

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: clinics_seq_id; Type: SEQUENCE; Schema: public; Owner: morgan
--

CREATE SEQUENCE public.clinics_seq_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.clinics_seq_id OWNER TO morgan;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: clinics; Type: TABLE; Schema: public; Owner: morgan
--

CREATE TABLE public.clinics (
    id integer DEFAULT nextval('public.clinics_seq_id'::regclass) NOT NULL,
    address character varying DEFAULT ''::character varying NOT NULL
);


ALTER TABLE public.clinics OWNER TO morgan;

--
-- Name: doctor_meta_seq_id; Type: SEQUENCE; Schema: public; Owner: morgan
--

CREATE SEQUENCE public.doctor_meta_seq_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.doctor_meta_seq_id OWNER TO morgan;

--
-- Name: doctor_patients; Type: TABLE; Schema: public; Owner: morgan
--

CREATE TABLE public.doctor_patients (
    doctor_id integer DEFAULT 0 NOT NULL,
    patient_id integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.doctor_patients OWNER TO morgan;

--
-- Name: doctor_seq_id; Type: SEQUENCE; Schema: public; Owner: morgan
--

CREATE SEQUENCE public.doctor_seq_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.doctor_seq_id OWNER TO morgan;

--
-- Name: doctors; Type: TABLE; Schema: public; Owner: morgan
--

CREATE TABLE public.doctors (
    id integer DEFAULT nextval('public.doctor_seq_id'::regclass) NOT NULL,
    first_name character varying DEFAULT ''::character varying NOT NULL,
    last_name character varying DEFAULT ''::character varying NOT NULL,
    sure_name character varying DEFAULT ''::character varying NOT NULL,
    email character varying DEFAULT ''::character varying NOT NULL,
    clinics_id integer,
    time_receipt timestamp without time zone
);


ALTER TABLE public.doctors OWNER TO morgan;

--
-- Name: patients_seq_id; Type: SEQUENCE; Schema: public; Owner: morgan
--

CREATE SEQUENCE public.patients_seq_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.patients_seq_id OWNER TO morgan;

--
-- Name: patients; Type: TABLE; Schema: public; Owner: morgan
--

CREATE TABLE public.patients (
    id integer DEFAULT nextval('public.patients_seq_id'::regclass) NOT NULL,
    first_name character varying DEFAULT ''::character varying NOT NULL,
    last_name character varying DEFAULT ''::character varying NOT NULL,
    time_receipt timestamp without time zone,
    email character varying DEFAULT ''::character varying NOT NULL,
    sure_name character varying DEFAULT ''::character varying NOT NULL
);


ALTER TABLE public.patients OWNER TO morgan;

--
-- Name: typeorm_metadata; Type: TABLE; Schema: public; Owner: morgan
--

CREATE TABLE public.typeorm_metadata (
    type character varying NOT NULL,
    database character varying,
    schema character varying,
    "table" character varying,
    name character varying,
    value text
);


ALTER TABLE public.typeorm_metadata OWNER TO morgan;

--
-- Data for Name: clinics; Type: TABLE DATA; Schema: public; Owner: morgan
--

COPY public.clinics (id, address) FROM stdin;
1	Лихачевский просп., 66 корпус 1, Долгопрудный, Московская обл., 141720
\.


--
-- Data for Name: doctor_patients; Type: TABLE DATA; Schema: public; Owner: morgan
--

COPY public.doctor_patients (doctor_id, patient_id) FROM stdin;
3	1
4	1
\.


--
-- Data for Name: doctors; Type: TABLE DATA; Schema: public; Owner: morgan
--

COPY public.doctors (id, first_name, last_name, sure_name, email, clinics_id, time_receipt) FROM stdin;
3	Денис	Байрамкулов	Денисовчи	test@mail.ru	1	2023-03-31 14:06:16
4	Джон	Кеннеди	Юрикович	test1@mail.ru	1	2023-03-31 18:30:00
\.


--
-- Data for Name: patients; Type: TABLE DATA; Schema: public; Owner: morgan
--

COPY public.patients (id, first_name, last_name, time_receipt, email, sure_name) FROM stdin;
3	Джон	Кеннеди	2023-03-31 12:48:59	test1@mail.ru	Леонидович
2	Тестер	Тестоввович	2023-03-31 12:00:59	test@mail.ru	Тестер
1	Тест	Тестович	2023-03-31 17:00:00	orm@mail.ru	
\.


--
-- Data for Name: typeorm_metadata; Type: TABLE DATA; Schema: public; Owner: morgan
--

COPY public.typeorm_metadata (type, database, schema, "table", name, value) FROM stdin;
\.


--
-- Name: clinics_seq_id; Type: SEQUENCE SET; Schema: public; Owner: morgan
--

SELECT pg_catalog.setval('public.clinics_seq_id', 1, true);


--
-- Name: doctor_meta_seq_id; Type: SEQUENCE SET; Schema: public; Owner: morgan
--

SELECT pg_catalog.setval('public.doctor_meta_seq_id', 1, false);


--
-- Name: doctor_seq_id; Type: SEQUENCE SET; Schema: public; Owner: morgan
--

SELECT pg_catalog.setval('public.doctor_seq_id', 4, true);


--
-- Name: patients_seq_id; Type: SEQUENCE SET; Schema: public; Owner: morgan
--

SELECT pg_catalog.setval('public.patients_seq_id', 3, true);


--
-- Name: clinics clinics_pk; Type: CONSTRAINT; Schema: public; Owner: morgan
--

ALTER TABLE ONLY public.clinics
    ADD CONSTRAINT clinics_pk PRIMARY KEY (id);


--
-- Name: doctors doctors_pk; Type: CONSTRAINT; Schema: public; Owner: morgan
--

ALTER TABLE ONLY public.doctors
    ADD CONSTRAINT doctors_pk PRIMARY KEY (id);


--
-- Name: patients patients_pk; Type: CONSTRAINT; Schema: public; Owner: morgan
--

ALTER TABLE ONLY public.patients
    ADD CONSTRAINT patients_pk PRIMARY KEY (id);


--
-- Name: doctor_patients doctor_patients_doctors_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: morgan
--

ALTER TABLE ONLY public.doctor_patients
    ADD CONSTRAINT doctor_patients_doctors_id_fk FOREIGN KEY (doctor_id) REFERENCES public.doctors(id);


--
-- Name: doctor_patients doctor_patients_patients_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: morgan
--

ALTER TABLE ONLY public.doctor_patients
    ADD CONSTRAINT doctor_patients_patients_id_fk FOREIGN KEY (patient_id) REFERENCES public.patients(id);


--
-- Name: doctors doctors_clinics_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: morgan
--

ALTER TABLE ONLY public.doctors
    ADD CONSTRAINT doctors_clinics_id_fk FOREIGN KEY (clinics_id) REFERENCES public.clinics(id);


--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Debian 14.5-1.pgdg110+1)
-- Dumped by pg_dump version 14.5 (Debian 14.5-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE postgres;
--
-- Name: postgres; Type: DATABASE; Schema: -; Owner: morgan
--

CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE postgres OWNER TO morgan;

\connect postgres

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: morgan
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database cluster dump complete
--

