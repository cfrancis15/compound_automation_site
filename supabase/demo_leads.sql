CREATE TABLE demo_leads (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL,
    phone VARCHAR(50),
    created_at TIMESTAMP DEFAULT NOW()
);

ALTER TABLE demo_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts"
ON demo_leads
FOR INSERT
WITH CHECK (true);
