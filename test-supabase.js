require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log('URL:', supabaseUrl ? 'Found' : 'Missing');
console.log('Key:', supabaseKey ? 'Found' : 'Missing');

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing env vars');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function test() {
    console.log('Testing connection to "certs" table...');
    const { data, error } = await supabase.from('certs').select('*');
    if (error) {
        console.error('Error fetching certs:', error);
    } else {
        console.log('Success! Data count:', data.length);
        if (data.length > 0) {
            console.log('First item sample:', JSON.stringify(data[0], null, 2));
        } else {
            console.log('Table is empty.');
        }
    }
}

test();
